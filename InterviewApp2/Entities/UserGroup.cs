using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewApp2.Entities
{
    public class UserGroup
    {
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string AdName { get; set; }
    }
}
