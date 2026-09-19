/* ============================================================
   UNITED WAY SITE SHOWDOWN — DATA FILE (V1 SITE)
   ------------------------------------------------------------
   Donations tallied from the 25-entry donation log.
   Total raised: $1,150 across 11 nominees in 3 categories.

   REMINDER: numbers get NO quotes and NO commas inside them.
   Write 1160, never "1,160" or 1,160.
   ============================================================ */

/* ---- EVENT INFO (shown in the header) ---- */
const EVENT_INFO = {
  eventDates: "V1 — Round One",
  siteName: "Fortis Site — United Way Campaign",
  // Set to a date string to show a live countdown, or null to hide.
  deadline: null
};

/* ---- PIE IN THE FACE THRESHOLDS ---- */
const TIERS = {
  eligible: 100,   // Eligible to be pied
  locked:   500,   // Pied regardless of position
  special: 1000    // SPECIAL PIE
};

/* ============================================================
   EVENT 1 — PIE IN THE FACE
   Three categories — each one pies its own leader.
   Contestants sorted highest to lowest within each group.
   ============================================================ */
const PIE_CATEGORIES = [

  /* ---------------- PCL CRAFT ---------------- */
  {
    name: "PCL Craft",
    tagline: "The Boots on the Ground",
    icon: "🔨",
    contestants: [

      {
        name: "Justin Parkman",
        org: "PCL",
        raised: 185,
        donors: [
          { name: "MJ Zimmerman", amount: 100 },
          { name: "Carlos Mercado", amount: 50 },
          { name: "Jayman Phillips", amount: 20 },
          { name: "Romeo Bayro", amount: 15 }
        ]
      },

      {
        name: "Carlos Mercado",
        org: "PCL",
        raised: 120,
        donors: [
          { name: "Jayman Phillips", amount: 50 },
          { name: "Les Colbe", amount: 50 },
          { name: "Mark Berg", amount: 20 }
        ]
      },

      {
        name: "Wayne Lodge",
        org: "PCL",
        raised: 120,
        donors: [
          { name: "Ashlee Fuller", amount: 50 },
          { name: "Diego (NWS)", amount: 50 },
          { name: "Jeremiah Butros", amount: 20 }
        ]
      },

      {
        name: "Johnny Gorgichuk",
        org: "PCL",
        raised: 105,
        donors: [
          { name: "Sam Mauvin", amount: 50 },
          { name: "Loreto Barcellano", amount: 15 },
          { name: "Bill Blake", amount: 15 },
           { name: "Les Colbe", amount: 25 }
        ]
      },

      {
        name: "Brian Catana",
        org: "PCL",
        raised: 100,
        donors: [
          { name: "Dayton Thomasson", amount: 40 },
          { name: "Mike Half", amount: 20 },
          { name: "Loretto Barcellano", amount: 15 },
           { name: "Les Colbe", amount: 25 }
         
        ]
      },

      {
        name: "Nino Cruz",
        org: "PCL",
        raised: 100,
        donors: [
          { name: "Terry Vanderveen", amount: 30 },
           { name: "Les Colbe", amount: 70 }
        ]
      }

    ]
  },

  /* ---------------- PCL STAFF ---------------- */
  {
    name: "PCL Staff",
    tagline: "The Trailer Crew",
    icon: "📋",
    contestants: [

      {
        name: "John Lee",
        org: "PCL",
        raised: 120,
        donors: [
          { name: "Gerron Martens", amount: 100 },
          { name: "Johnny Gorgichuk", amount: 20 }
        ]
      },

      {
        name: "Thomas Schaller",
        org: "PCL",
        raised: 200,
        donors: [
          { name: "Brian Theriault", amount: 100 },
           { name: "Justin Kologie", amount: 100 }
        ]
      },

      {
        name: "Chris McDowell",
        org: "PCL",
        raised: 170,
        donors: [
          { name: "Grant Michelin", amount: 40 },
          { name: "Raymundo (NWS)", amount: 30 },
           { name: "Chad Kubersky", amount: 40 },
           { name: "Thomas Schaller", amount: 30 },
           { name: "Les Colbe", amount: 30 }
        ]
      },

      {
        name: "Bill Moore",
        org: "PCL",
        raised: 150,
        donors: [
          { name: "Roger Kokkula", amount: 50 },
           { name: "Thomas Schaller", amount: 50 },
           { name: "Les Colbe", amount: 50 }
        ]
      }

    ]
  },

  /* ---------------- CLIENT ---------------- */
  {
    name: "Client",
    tagline: "The Client Strikes Back",
    icon: "⚡",
    contestants: [

      {
        name: "Stuart W",
        org: "FEI",
        raised: 200,
        donors: [
          { name: "Darren Thompson", amount: 100 },
          { name: "Alan Chee", amount: 100 }
        ]
      }

    ]
  }

];

/* ============================================================
   EVENT 2 — HOT DOG EATING TIME TRIALS
   Add one line per run, any order. Sorts fastest-first.
   Time = plain seconds (47.6) or "M:SS.m" format ("1:04.9").
   ============================================================ */
const HOTDOG_TIMES = [
  // { name: "Wayne Lodge", org: "PCL", time: 47.6, day: "Day 1" },
];

/* Number of positions shown on the timing board */
const HOTDOG_BOARD_SIZE = 10;
