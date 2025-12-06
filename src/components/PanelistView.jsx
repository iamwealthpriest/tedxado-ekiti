import SpeakerGallery from "./SpeakerGallery";
import Button from "./Button";
import TEDxBg from "../assets/home/TEDx.png";
import commissionerImg from "../assets/panelists/commissioner.PNG";
import DKEImg from "../assets/panelists/DKE.png";
import titilayoImg from "../assets/panelists/titilayo.png";
import { NavLink } from "react-router-dom";

const PanelistView = () => {

  return (
    <div className="px-[60px] max-lg:px-[20px] py-20">
      <h1 className="heading-with-underline">Our Panelists</h1>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${TEDxBg})` }}
      >
        <div className="py-10">
          <SpeakerGallery
            speakers={[
              { name: "Titilayo Obileye", position: "Communication and Media Specialist", image: titilayoImg , bio :"Titilayo Obileye is an award-winning Nigerian journalist and communications strategist currently serving as Technical Assistant on Media & Communications to Ekiti State Governor, His Excellency Biodun Abayomi Oyebanji. Renowned for crafting compelling public narratives and leading impactful government outreach, she is a dynamic speaker on visionary leadership, youth empowerment, climate action, and personal branding.Her recent highlights include delivering a keynote on “Reimagining Governance” at the African Students Leadership Summit (ASLS 2025), speaking on personal branding at LinkedIn Local Ekiti 2024, and serving as a panelist for International Day of the Girl Child 2025 discussions. A passionate advocate for equitable education and community development, Titilayo continues to inspire and mentor emerging leaders across Nigeria."},
              { name: "Hon. Omotayo Adeola", position: "Hon. Commissioner, Ministry of Trade, Investment, Industry and Cooperatives, Ekiti State Government", image: commissionerImg, bio: "Hon. Omotayo Adeola, FIMC, CMC, is an accomplished Nigerian investment banker and public servant with over 31 years of expertise in capital raising, project development, treasury management, securities trading, risk management, and financial advisory. She began her career at ICON Limited in 1991 and advanced at Consolidated Discounts Limited, managing assets exceeding $1.2 billion, before transitioning to public service as Special Adviser to the Ekiti State Governor on Investment, Trade, and Industry.Currently serving as Honourable Commissioner for Industry, Trade, and Investment in Ekiti State under Governor Biodun Abayomi Oyebanji, she drives economic growth through MSME support, AfCFTA integration, and tourism promotion. Her notable achievements include leading the ₦5 billion MSME Fund with the Bank of Nigeria for small enterprises, spearheading the Aso Oke Weaving and Market Centre for socio-economic development, and earning CEO of the Year, Banking - Multinational at the Ghana CEO Excellence Awards 2023/2024. A dedicated advocate for entrepreneurship, youth engagement, and inclusive prosperity, Hon. Adeola continues to position Ekiti as a hub for trade and innovation." },
              { name: "Mrs. Lolade Olutola", position: "Director General, Ekiti State Development and Investment Promotion Agency (EKDIPA)", image: DKEImg, bio: "Mrs. Lolade Oke-Olutola is an accomplished investment promotion expert currently serving as Director-General of the Ekiti State Development and Investment Promotion Agency (EKDIPA) under Governor Biodun Abayomi Oyebanji since October 2023.With a background in finance and strategic management, she previously led Oyo State’s Investment and PPP Agency (OYSIPA). She spearheads Ekiti’s economic diversification, attracting investments through the Ekiti Knowledge Zone (projected 14,000 jobs), securing ₦1.45 billion in landowner compensation, and earning Ekiti recognition as Nigeria’s most investor-ready state in 2025.A strong advocate for inclusive growth and MSME development, she fosters partnerships with traditional institutions, international organisations, and the private sector to drive sustainable prosperity in Ekiti." },
            ]}
            maxItems={3}
          />
        </div>
      </div>

    </div>
  );
};

export default PanelistView;
