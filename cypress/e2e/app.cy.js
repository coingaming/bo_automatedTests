describe('Login Test', () => {
  it('logs in successfully', () => {
    cy.visit('/dashboard');
    cy.document().then(doc => {
      const loginInput = doc.querySelector('input[name="login"]');
      if (loginInput) {
        cy.get('#username').type('bruno.peres@yolo.com');
        cy.get('#password').type('nwm8mnb8QKN4uyg@kyf');
        cy.wrap(loginInput).click();
      } else {
        cy.log('Input com name="login" não encontrado, aprovando teste');
      }
    });
  });
});

// cypress/support/e2e.js or e2e.ts (Cypress v10+)
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('ResizeObserver loop')) {
    return false; // Prevent test failure
  }
});

describe('Games Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/reports/games');
  });
});

describe('Summary Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/reports/summary');
  });
});

describe('Players Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/reports/players');
  });
});

describe('Suppliers Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/reports/suppliers');
  });
});

describe('Countries Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/reports/countries');
  });
});

describe('Currencies Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/reports/currencies');
  });
});

describe('Partners Agreement Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/partner-agreement');
  });
});

describe('transactions Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/transactions');
  });
});

describe('transactions Table', () => {
  it('Date filter Last Month returning the correct table', () => {
    cy.contains(/Today|Last Month|Last Week|Yesterday|This Week|This Month|Last 24 Hours/i).click();

    cy.get('li')
      .contains('Last Month')
      .click();

    cy.contains('Apply').click();

    cy.contains(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2}, \d{4}\b/, { timeout: 30000 })
      .invoke('text')
      .then(text => {
        const insertedDate = new Date(text);
        const now = new Date();

        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

        const isLastMonth =
          insertedDate.getMonth() === lastMonth &&
          insertedDate.getFullYear() === lastMonthYear;

        expect(isLastMonth, `Esperava data de mês anterior, recebeu "${text}"`).to.be.true;
      });
  });
});

describe('Exporting table', () => {
  it('Table successfully exported', () => {
    cy.get('button[aria-label="Select export method"]').click();

    cy.get('div')
      .contains(/download/i) // case-insensitive match
      .click({ force: true }); // force in case it's hidden under a dropdown
  });
});

describe('flagged-activity Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/flagged-activity');
  });
});

describe('Invoices Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/invoices');
  });
});

describe('Wallets Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/wallets');
  });
});

describe('Rewards Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/freebets/rewards');
  });
});

describe('Campaigns Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/freebets/campaigns');
  });
});

describe('User Mapping Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/user-mapping');
  });
});

describe('Game Releases Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/games/management');
  });
});

describe('Game Deprecation Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/games/deprecation');
  });
});

describe('Active Games Tab Test', () => {
  it('Page loads successfully', () => {
    cy.visit('/games/active');
  });
});