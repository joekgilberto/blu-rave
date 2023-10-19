using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("users")]
    public class BluRay
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("name")]
        public string Title { get; set; }

        [Column("steelbook")]
        public bool Steelbook { get; set; }

        [Column("fourk")]
        public bool FourK { get; set; }

        [Column("television")]
        public bool Television { get; set; }

        [Column("dateadded")]
        public DateOnly DateAdded { get; set; }
    }
}