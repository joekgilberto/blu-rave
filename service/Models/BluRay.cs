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

        [Column("four_k")]
        public bool FourK { get; set; }

        [Column("television")]
        public bool Television { get; set; }

        [Column("date_added")]
        public DateOnly DateAdded { get; set; }
    }
}