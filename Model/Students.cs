using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;





namespace FirstApi.Model
{
    public class Students
    { 
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
         public Int64 PhoneNo { get; set; }
         public  string Password {get; set;}
          public string Address { get; set; }
       
    //    public ICollection<Course> courses {get; set;}
    }
}