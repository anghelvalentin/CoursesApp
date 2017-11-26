using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Entities
{
    public class Course
    {
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string Name { get; set; }


        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public UInt16 Spots { get; set; }

        public UInt16 FreeSpots { get; set; }
    }
}
