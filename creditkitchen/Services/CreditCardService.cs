using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using creditkitchen.Models;
using System.Threading.Tasks;
using System.Linq;

namespace creditKitchen.Services
{
    public class CreditCardService
    {
        private readonly IConfiguration _ConnectionString;

        public CreditCardService(IConfiguration configuration) { _ConnectionString = configuration; }



        public IEnumerable<CreditCardShort> GetCreditCardsAsync(string category)
        {
            using (SqlConnection conn = new SqlConnection(_ConnectionString.GetSection("Data").GetSection("ConnectionString").Value))
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@category", category);
                conn.Open();
                var result = conn.Query<CreditCardShort>("p_GetCreditCards", parameters, commandType: CommandType.StoredProcedure);
                conn.Close();

                return result; 
            }
        }

        public CreditCard GetCreditCardDetailsAsync(string name)
        {
            using (SqlConnection conn = new SqlConnection(_ConnectionString.GetSection("Data").GetSection("ConnectionString").Value))
            {
                DynamicParameters parameters = new DynamicParameters();
                parameters.Add("@name", name);
                conn.Open();
                var result = conn.Query<CreditCard>("p_GetCreditCard", parameters, commandType: CommandType.StoredProcedure);
                conn.Close();

                return result.FirstOrDefault();
            }
        }


    }

}
