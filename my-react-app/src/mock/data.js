export const patrimoines = {
  patrimoines: [
    {
      id: 1,
      name: "Patrimoine A",
      montants: [
        { date: "2024-01-01", montant: 500, type: "Trésorerie" },
        { date: "2024-01-15", montant: 600, type: "Immobilisations" },
        { date: "2024-02-01", montant: 550, type: "Trésorerie" },
        { date: "2024-02-15", montant: 700, type: "Immobilisations" },
        { date: "2024-03-01", montant: 800, type: "Trésorerie" },
        { date: "2024-03-15", montant: 900, type: "Agregat" },
        { date: "2024-04-01", montant: 1000, type: "Obligation" },
        { date: "2024-04-15", montant: 1100, type: "Trésorerie" },
        { date: "2024-05-01", montant: 1200, type: "Immobilisations" },
        { date: "2024-05-15", montant: 1300, type: "Agregat" },
      ],
    },
    {
      id: 2,
      name: "Patrimoine B",
      montants: [
        { date: "2024-01-05", montant: 300, type: "Trésorerie" },
        { date: "2024-01-20", montant: 400, type: "Immobilisations" },
        { date: "2024-02-05", montant: 350, type: "Trésorerie" },
        { date: "2024-02-20", montant: 450, type: "Immobilisations" },
        { date: "2024-03-05", montant: 600, type: "Trésorerie" },
        { date: "2024-03-20", montant: 700, type: "Agregat" },
        { date: "2024-04-05", montant: 800, type: "Obligation" },
        { date: "2024-04-20", montant: 900, type: "Trésorerie" },
        { date: "2024-05-05", montant: 1000, type: "Immobilisations" },
        { date: "2024-05-20", montant: 1100, type: "Agregat" },
      ],
    },
    {
      id: 3,
      name: "Patrimoine C",
      montants: [
        { date: "2024-01-10", montant: 700, type: "Trésorerie" },
        { date: "2024-01-25", montant: 800, type: "Immobilisations" },
        { date: "2024-02-10", montant: 750, type: "Trésorerie" },
        { date: "2024-02-25", montant: 850, type: "Immobilisations" },
        { date: "2024-06-10", montant: 900, type: "Trésorerie" },
        { date: "2024-06-15", montant: 950, type: "Agregat" },
        { date: "2024-07-01", montant: 1000, type: "Obligation" },
        { date: "2024-07-15", montant: 1100, type: "Trésorerie" },
        { date: "2024-08-01", montant: 1200, type: "Immobilisations" },
        { date: "2024-08-15", montant: 1300, type: "Agregat" },
      ],
    },
    {
      id: 4,
      name: "Patrimoine D",
      montants: [
        { date: "2024-01-02", montant: 400, type: "Obligation" },
        { date: "2024-01-12", montant: 550, type: "Trésorerie" },
        { date: "2024-02-05", montant: 600, type: "Immobilisations" },
        { date: "2024-02-18", montant: 700, type: "Agregat" },
        { date: "2024-03-10", montant: 800, type: "Trésorerie" },
        { date: "2024-03-25", montant: 900, type: "Obligation" },
        { date: "2024-04-15", montant: 1000, type: "Immobilisations" },
        { date: "2024-05-05", montant: 1100, type: "Agregat" },
        { date: "2024-05-20", montant: 1200, type: "Trésorerie" },
        { date: "2024-06-01", montant: 1300, type: "Immobilisations" },
      ],
    },
  ],
};

export const persons = [
  { id: 1, name: "Personne 1" },
  { id: 2, name: "Personne 2" },
  { id: 3, name: "Personne 3" },
  { id: 4, name: "Personne 4" },
];

export const types = [
  "Trésorerie",
  "Immobilisations",
  "Agregat",
  "Obligation",
];
