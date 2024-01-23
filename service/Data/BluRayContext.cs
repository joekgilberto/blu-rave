using Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class BluRayContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public BluRayContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to postgres with connection string from app settings
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<BluRay> BluRays { get; set; }
    }
}