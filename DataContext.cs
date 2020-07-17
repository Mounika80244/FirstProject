using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// using FirstApi.Model;
using FirstApi.Entities;



namespace FirstApi
{
    public class DataContext : DbContext
    {
//parent constuctor
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
      public  DbSet<User> User{get;set;}
    }
}


