using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;



// table creation in db
namespace FirstApi.Entities
{
    public class User
    {
        
       [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public  Int64 PhoneNo { get; set; }
        public  string Password {get; set;}
        public string Address { get; set; }
    }
    
}
