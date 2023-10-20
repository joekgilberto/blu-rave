using Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class BluRayContext : DbContext
    {
        public BluRayContext(DbContextOptions<BluRayContext> options) : base(options)
        {
        }

        public DbSet<BluRay> BluRays { get; set; }
    }
}