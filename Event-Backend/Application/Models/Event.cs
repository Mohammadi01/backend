using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.Marshalling;
using Persistence.Entities;

namespace Application.Models
{
    public class Event
    {
        [Key]
        public string Id { get; set; } = null!;
        public string? Image { get; set; }
        public string? Title { get; set; }

        public DateTime EventDate { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }


    }
}