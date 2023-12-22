// script.js

// Fetch the domains data from the JSON file
fetch('domains.json')
    .then(response => response.json())
    .then(domains => {
        // Get the domain list container
        const domainList = document.getElementById('domain-list');

        // Loop through each domain
        domains.forEach(domain => {
            // Create a new domain item
            const domainItem = document.createElement('div');
            domainItem.classList.add('domain-item');

            // Create the domain name element
            const domainName = document.createElement('h2');
            domainName.textContent = domain.domain;
            domainItem.appendChild(domainName);

            // Create the domain price element
            const domainPrice = document.createElement('p');
            domainPrice.classList.add('price');
            domainPrice.textContent = domain.price;
            domainItem.appendChild(domainPrice);

            // Create the domain status element
            const domainStatus = document.createElement('p');
            domainStatus.textContent = domain.status;
            domainItem.appendChild(domainStatus);

            // Create the domain optimize element
            const domainOptimize = document.createElement('p');
            domainOptimize.textContent = `Optimize: ${domain.optimize}`;
            domainItem.appendChild(domainOptimize);

            // Create the domain revenue element
            const domainRevenue = document.createElement('p');
            domainRevenue.textContent = `Revenue: ${domain.revenue}`;
            domainItem.appendChild(domainRevenue);

            // Add the domain item to the domain list
            domainList.appendChild(domainItem);
        });
    })
    .catch(error => console.error('Error:', error));
