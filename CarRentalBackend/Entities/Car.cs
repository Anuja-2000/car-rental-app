using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalBackend.Entities
{
    public class Car
    {
        [Key]
        public int CarId { get; set; }

        [Required]
        public string LicensePlateNumber { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public string GearBox { get; set; }

        [Required]
        public string FuelType { get; set; }

        [Required]
        public int Doors { get; set; }

        [Required]
        public string AirConditioner { get; set; }

        [Required]
        public int Seats { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        public double Distance { get; set; }

        [Required]
        public double RentPrice { get; set; }

        // Foreign Key: ModelId
        public int ModelId { get; set; }
        [ForeignKey("ModelId")]
        public Model Model { get; set; } // Navigation Property
    }
}
