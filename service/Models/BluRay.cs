using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("blu_rays")]
    public class BluRay
    {
        [Column("id")]
        public required int Id { get; set; }

        [Column("title")]
        public required string Title { get; set; }

        [Column("year")]
        public int? Year { get; set; }

        [Column("steelbook")]
        public required bool Steelbook { get; set; }

        [Column("definition")]
        public required string Definition { get; set; }

        [Column("format")]
        public required string Format { get; set; }

        [Column("notes")]
        public string? Notes { get; set; }

        [Column("date_added")]
        public required DateOnly DateAdded { get; set; }
        
        [Column("owner")]
        public required string Owner { get; set; }
        
        [Column("username")]
        public required string Username { get; set; }

        [Column("email")]
        public required string Email { get; set; }

        [Column("likes")]
        public List<string>? Likes { get; set; }

        internal void Remove(string v)
        {
            throw new NotImplementedException();
        }
    }
}