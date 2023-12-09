using System.Security.Claims;
using System.Text;
using Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
string key = Environment.GetEnvironmentVariable("KEY");
string corsOrigin = Environment.GetEnvironmentVariable("CORS_ORIGIN");
string connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");
string auth0Domain = Environment.GetEnvironmentVariable("AUTH0_DOMAIN");
string auth0Audience = Environment.GetEnvironmentVariable("AUTH0_AUDIENCE");

var builder = WebApplication.CreateBuilder(args);
builder.Configuration["ConnectionStrings:WebApiDatabase"] = connectionString;
builder.Configuration["Auth0:Domain"] = auth0Domain;
builder.Configuration["Auth0:Audience"] = auth0Audience;

// Add services to the container.
var domain = $"https://{builder.Configuration["Auth0:Domain"]}/";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.Authority = domain;
    options.Audience = builder.Configuration["Auth0:Audience"];
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidIssuer = domain,
        ValidAudience = builder.Configuration["Auth0:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key)),
        NameClaimType = ClaimTypes.NameIdentifier
    };
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.WithOrigins(corsOrigin)
                                                  .AllowAnyOrigin()
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});

// Added configuration for PostgreSQL
var configuration = builder.Configuration;
builder.Services.AddDbContext<BluRayContext>(options =>
    options.UseNpgsql(configuration.GetConnectionString("WebApiDatabase")));



builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("read:blu-rays", policy => policy.Requirements.Add(new 
    HasScopeRequirement("read:blu-rays", domain)));
});

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

builder.Services.ConfigureSwaggerGen(setup =>
{
    setup.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Blu-Rave",
        Version = "v1"
    });
});

var app = builder.Build();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors(MyAllowSpecificOrigins);

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.MapControllers();

app.Run();
