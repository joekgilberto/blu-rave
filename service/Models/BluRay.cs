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
        public string Steelbook { get; set; }

        [Column("fourk")]
        public string FourK { get; set; }

        [Column("television")]
        public string Television { get; set; }

        [Column("date_added")]
        public DateOnly DateAdded { get; set; }
    }
}