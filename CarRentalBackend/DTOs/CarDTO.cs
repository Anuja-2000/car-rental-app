namespace CarRentalBackend.DTOs
{
    public class CarDTO
    {
        public string LicensePlateNumber { get; set; }
        public string Color { get; set; }
        public string GearBox { get; set; }
        public string FuelType { get; set; }
        public int Doors { get; set; }
        public string AirConditioner { get; set; }
        public int Seats { get; set; }
        public string ImageUrl { get; set; }
        public double Distance { get; set; }
        public double RentPrice { get; set; }
        public int ModelId { get; set; }
    }
}
