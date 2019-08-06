using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace creditkitchen.Models
{
    public class CreditCardShort
    {
        public int id { get; set; }
        public string bank { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public string img { get; set; }
        public string bonusLabel1 { get; set; }
        public string bonusTop1 { get; set; }
        public string bonusBottom1 { get; set; }
        public string bonusLabel2 { get; set; }
        public string bonusTop2 { get; set; }
        public string bonusBottom2 { get; set; }
        public string bonusLabel3 { get; set; }
        public string bonusTop3 { get; set; }
        public string bonusBottom3 { get; set; }
        public string bonusLabel4 { get; set; }
        public string bonusTop4 { get; set; }
        public string bonusBottom4 { get; set; }
        public string applyUrl { get; set; }
        public string referUrl { get; set; }
        public int minScore { get; set; }
        public int maxScore { get; set; }
        public string annualFeeTop { get; set; }
        public string annualFeeBottom { get; set; }
        public string rewardsRateLabel { get; set; }
        public string rewardsRateTop { get; set; }
        public string rewardsRateBottom { get; set; }
        public string welcomeBonusLabel { get; set; }
        public string welcomeBonusTop { get; set; }
        public string welcomeBonusBottom { get; set; }
    }
}