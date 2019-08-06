using System.Collections.Generic;
using System.Threading.Tasks;
using creditkitchen.Models;
using creditKitchen.Services;
using Microsoft.AspNetCore.Mvc;


namespace creditkitchen.Controllers
{
    [Route("api/[controller]")]
    public class CreditCardController : Controller
    {
        private readonly CreditCardService _service;

        public CreditCardController(CreditCardService service) { _service = service; }

        [Route("")]
        [HttpGet]
        public IEnumerable<CreditCardShort> GetCreditCards(string category = "")
        {
            var result = _service.GetCreditCardsAsync(category);
            return result;
        }

        [Route("details")]
        [HttpGet]
        public CreditCard GetCreditCardDetails(string name = "")
        {
            var result = _service.GetCreditCardDetailsAsync(name);
            return result;
        }


    }
}
