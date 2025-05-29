import { useEffect, useState } from "react";
import "./ClientSection.css";

const BASE_URL = "https://kggeniuslabs.com:5000";

function ClientSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/get-client`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setClients(data.data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch clients", err);
      });
  }, []);


  const topClients = clients.slice(0, 6);
  const bottomClients = clients.slice(6); 

  return (
    <div className="container-fluid techstack-container">
        <h1 className="text-center evolheading mb-5">
          <b>Our Clients</b>
        </h1>
     

      
      {topClients.length > 0 && (
        <div className="scroll-container scroll-container-top">
          <div className="scroll-content1">
            {topClients.map((client) => (
              <img
                key={client.id}
                src={`${BASE_URL}${client.logo}`}
                alt={client.company_name}
                className="tech-logo"
              />
            ))}
            {topClients.map((client) => (
              <img
                key={`dupe-${client.id}`}
                src={`${BASE_URL}${client.logo}`}
                alt={client.company_name}
                className="tech-logo"
              />
            ))}
          </div>
        </div>
      )}

      
      {bottomClients.length > 0 && (
        <div className="scroll-container scroll-container-bottom">
          <div className="scroll-content">
            {bottomClients.map((client) => (
              <img
                key={client.id}
                src={`${BASE_URL}${client.logo}`}
                alt={client.company_name}
                className="tech-logo"
              />
            ))}
            {bottomClients.map((client) => (
              <img
                key={`dupe-${client.id}`}
                src={`${BASE_URL}${client.logo}`}
                alt={client.company_name}
                className="tech-logo"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientSection;