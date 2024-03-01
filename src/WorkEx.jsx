export default function WorkEx() {
  return (
    <div>
      <div
        id="workex-container"
        className="workex-container bg-slate-900 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6">
          Work Experience/ Freelance Projects
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Website Developer Intern</h3>
                <span className="text-white">Nagpur, Maharashtra</span>
                <p className="text-white mb-3">
                  <em>July 2023 - Jan 2024</em>
                </p>
                <p className="text-gray-400 text-justify">
                Developed and Implemented web scrapers to extract data from various websites, enhancing the data collection process for <a href="https://yashra.in" className="text-sky-500">yashra.in </a> •
                Implemented pattern-matching algorithms to automate data categorization & classification on the site •
                Technologies Used: ReactJs, Web Scraping(Selenium), MongoDB etc
                  </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Api Engineer Intern</h3>
                <span className="text-white">Bhopal, Madhya Pradesh</span>
                <p className="text-white mb-3">
                  <em>June 2023 - Aug 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                Developed Robust APIs using Django REST Framework for financial management services •
                Thoroughly tested the APIs using Postman to ensure functionality and reliability •
                Implemented Token-Based authentication to enhance API security and access control
                </p>
              </div>
            </div>

            {/* <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Website Developer</h3>
                <span className="text-white">Freelance with StingHike</span>
                <p className="text-white mb-3">
                  <em>Oct 2023 - Dec 2024</em>
                </p>
                <p className="text-gray-400 text-justify">
                Developed a Self-Earning Web-App using Django, ReactJs and NodeJs •
                Developed an application business logic inside Django & payment logics inside NodeJs that ensures seamless/secure
                transactions •
                Implemented a wallet-recharge system, allowing users to fund their wallets for convenient and secure purchases
                Designed and developed the system to distribute daily incomes to users based on their product purchases,
                enhancing user engagement and satisfaction
                </p>
              </div>
            </div> */}
            
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-sky-500">Website Developer</h3>
                <span className="text-white">Dermacet Organics</span>
                <p className="text-white mb-3">
                  <em>Feb 2023 - July 2023</em>
                </p>
                <p className="text-justify text-gray-400">
                Designed and developed a product-selling system from scratch using a variety of technologies, including HTML,
                CSS, javascript, Bootstrap, Django and SQLite and deployed it using Nginx, Gunicorn & Digital Ocean as CSP
                • Worked in a team environment and used version controls like Git/GitHub for maintaining the Collaborative
                approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
