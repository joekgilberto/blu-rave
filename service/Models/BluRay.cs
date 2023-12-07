using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("blu_rays")]
    public class BluRay
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("title")]
        public string Title { get; set; }

        [Column("steelbook")]
        public bool Steelbook { get; set; }

        [Column("definition")]
        public string Definition { get; set; }

        [Column("format")]
        public string Format { get; set; }

        [Column("notes")]
        public string? Notes { get; set; }

        [Column("date_added")]
        public DateOnly DateAdded { get; set; }
        
        [Column("owner")]
        public string Owner { get; set; }
        
        [Column("year")]
        public int? Year { get; set; }
    }
}