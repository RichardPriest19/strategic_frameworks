/* ============================================================
   12 STRATEGIC FRAMEWORKS  |  sf-app.js
   ============================================================ */

const THEMES = {
  crimson: { main:'#8b1a1a', mid:'#a52424', lt:'#f5e8e8', bg:'#fdf6f6' },
  forest:  { main:'#1a5c38', mid:'#226e45', lt:'#e2efea', bg:'#f5faf7' },
  slate:   { main:'#1e3a5f', mid:'#264d7a', lt:'#e2eaf4', bg:'#f5f8fc' },
};

const FRAMEWORKS = [

  // ── SECTION 1: ANALYSE ─────────────────────────────────
  {
    id:1, section:'analyse', theme:'crimson',
    name:"Porter's Five Forces",
    question:"How attractive is this industry, and where does power really lie?",
    summary:"Michael Porter's 1979 framework analyses the five competitive forces shaping every industry — revealing why some industries are structurally more profitable than others and where a company's true strategic vulnerabilities lie.",
    tags:['Industry Analysis','Competition','Entry Barriers'],
    roles:['CEO','Strategy Director','Corporate Development','Investment Analysts'],
    when:"Use before entering a new market, making a major acquisition, or setting a long-term competitive strategy.",
    overview:"Developed by Harvard Business School professor Michael Porter and published in the Harvard Business Review in 1979, the Five Forces framework revolutionised how strategists think about industry competition. Before Porter, strategy focused almost exclusively on direct competitors. Porter showed that an industry's profit potential is shaped by five structural forces — and that understanding all five is the key to finding defensible strategic positions. It remains the most widely taught strategy framework in business schools worldwide.",
    problem:"Most companies analyse only their direct competitors. But profits can be eroded by suppliers raising prices, buyers demanding discounts, substitutes making the product obsolete, or new entrants flooding the market. Porter's Five Forces ensures none of these threats go unexamined.",
    components:[
      ["1. Competitive Rivalry","The intensity of competition among existing players. High when: many competitors of similar size, low switching costs, slow industry growth, high fixed costs."],
      ["2. Threat of New Entrants","How easily can new competitors enter? Reduced by: high capital requirements, strong brand loyalty, economies of scale, regulatory barriers, network effects."],
      ["3. Bargaining Power of Suppliers","Can suppliers raise prices or reduce quality? High when: few suppliers, high switching costs, supplier's product is critical, no substitutes for their input."],
      ["4. Bargaining Power of Buyers","Can customers demand lower prices or better terms? High when: buyers are large and concentrated, products are undifferentiated, switching costs are low."],
      ["5. Threat of Substitutes","Can a different product meet the same need? High when: substitute offers better price-performance ratio, switching costs are low, substitutes have strong brand presence."],
    ],
    process:[
      "Define the specific industry or market segment you are analysing",
      "For each of the five forces, gather evidence: market data, customer interviews, supplier contracts, regulatory landscape",
      "Rate each force: low, medium, or high intensity",
      "Synthesise: which forces are most threatening? What is the overall industry attractiveness?",
      "Identify strategic implications: which forces can you influence? Where must you defend?",
    ],
    when_list:[
      "Before entering a new market or launching a new product category",
      "Evaluating an acquisition target's competitive position",
      "Annual strategic planning — reassess forces that have shifted",
      "Investor due diligence and business case development",
      "Understanding why margins are declining despite growing revenue",
    ],
    pitfalls:[
      "Analysing the industry too broadly — apply Five Forces to a specific segment, not 'tech' or 'healthcare'",
      "Treating the analysis as static — forces shift over time; reassess annually",
      "Ignoring the sixth force: complements (products that enhance yours) — sometimes called Porter's Sixth Force",
      "Using Five Forces as a one-person desk exercise — the most valuable insights come from customer and supplier interviews",
    ],
    software:["Miro (collaborative strategy mapping)","Lucidchart","Strategyzer","PowerPoint / Keynote","Notion (strategy templates)"],
  },

  {
    id:2, section:'analyse', theme:'crimson',
    name:"SWOT Analysis",
    question:"What are our real strengths, genuine weaknesses, true opportunities, and actual threats?",
    summary:"The most widely used strategic planning tool in the world. A structured four-quadrant assessment of internal capabilities and external conditions — most powerful not as a list exercise, but as a platform for generating concrete strategic options.",
    tags:['Strategic Planning','Internal Analysis','External Analysis'],
    roles:['Leadership Team','Strategy Teams','Business Unit Heads','Consultants'],
    when:"Use at the start of any strategic planning cycle, before launching a major initiative, or when facing significant market change.",
    overview:"SWOT Analysis was developed at the Stanford Research Institute in the 1960s and 1970s, primarily attributed to Albert Humphrey. It has become the most universally used strategic planning tool precisely because of its simplicity: any team, in any industry, can use it to structure a strategic conversation. The four quadrants — Strengths, Weaknesses, Opportunities, Threats — map internal factors (Strengths and Weaknesses) against external ones (Opportunities and Threats).",
    problem:"Strategic conversations without structure tend to be dominated by the loudest voices and the most recent events. SWOT provides a shared framework that ensures all four dimensions of the strategic landscape are examined systematically before decisions are made.",
    components:[
      ["Strengths (Internal, Positive)","What does the organisation do exceptionally well? What resources, capabilities, or advantages do we have that competitors lack? E.g., brand recognition, proprietary technology, talent density, customer relationships."],
      ["Weaknesses (Internal, Negative)","Where are we genuinely vulnerable? What capabilities do we lack? What do competitors do better than us? Honesty here is critical — the most common failure is underestimating weaknesses."],
      ["Opportunities (External, Positive)","What market trends, regulatory changes, competitor failures, or technology shifts could we exploit? Opportunities exist outside the organisation and require action to capture."],
      ["Threats (External, Negative)","What external forces could harm performance? Emerging competitors, regulatory changes, shifting customer preferences, economic conditions, technology disruption."],
      ["TOWS Analysis","The advanced step: cross-reference SWOT quadrants to generate strategies. S+O = pursue growth. S+T = use strengths to neutralise threats. W+O = shore up weaknesses to capture opportunities. W+T = defensive strategies."],
    ],
    process:[
      "Assemble a cross-functional team — SWOT is only as good as the diversity of perspectives in the room",
      "Set a clear scope: which business unit, product, or market is this SWOT for?",
      "Brainstorm each quadrant independently before discussing — prevents groupthink",
      "Prioritise: rank items in each quadrant by strategic importance",
      "Run TOWS analysis: cross-reference quadrants to generate concrete strategic options",
      "Convert the most important TOWS strategies into specific initiatives with owners and timelines",
    ],
    when_list:[
      "Annual and quarterly strategic planning sessions",
      "Before launching a new product, market entry, or major initiative",
      "Responding to a significant market shift or competitive threat",
      "Post-merger integration planning",
      "Business case development for investment decisions",
    ],
    pitfalls:[
      "Creating an exhaustive list of 20+ items per quadrant — prioritise ruthlessly to the top 3–5",
      "Treating SWOT as the end of analysis rather than the beginning of strategy",
      "Confusing internal factors (Strengths/Weaknesses) with external ones (Opportunities/Threats)",
      "Not running TOWS — most SWOT sessions end with a nice diagram and no strategic action",
    ],
    software:["Miro (SWOT templates)","Mural","Lucidchart","Notion","Microsoft Whiteboard","Strategyzer"],
  },

  {
    id:3, section:'analyse', theme:'crimson',
    name:"PESTLE Analysis",
    question:"What macro-environmental forces are shaping our strategic context?",
    summary:"A structured scan of the six macro-environmental forces — Political, Economic, Social, Technological, Legal, and Environmental — that lie outside organisational control but profoundly shape strategic opportunity and risk.",
    tags:['Macro Environment','Risk','External Analysis'],
    roles:['Strategy Teams','Risk Functions','Government Affairs','Board Members'],
    when:"Use before major strategic decisions, market entries, or long-range planning to understand the macro forces at play.",
    overview:"PESTLE (also written PESTEL or PEST) is a strategic environmental scanning framework used to identify and analyse the macro-level forces shaping an organisation's operating context. It originated from Francis Aguilar's 1967 work 'Scanning the Business Environment' and has been refined and expanded over decades. Unlike Porter's Five Forces (industry-level) and SWOT (organisation-level), PESTLE operates at the macro level — the forces no single organisation can control.",
    problem:"Companies regularly fail not because their strategy was wrong but because they didn't see the macro-level shift coming: a regulatory change, an economic recession, a technology disruption, a shift in social values. PESTLE creates a systematic habit of scanning the horizon for these forces before they blindside the organisation.",
    components:[
      ["P — Political","Government policies, political stability, trade regulations, tax policies, foreign trade restrictions, corruption levels, labour laws."],
      ["E — Economic","Economic growth rates, inflation, interest rates, exchange rates, unemployment, consumer confidence, credit availability, income distribution."],
      ["S — Social","Demographics, cultural trends, lifestyle changes, education levels, attitudes toward work and leisure, health consciousness, population growth."],
      ["T — Technological","R&D activity, automation, technology incentives, rate of technological change, technology infrastructure, disruptive innovations."],
      ["L — Legal","Employment law, consumer protection law, copyright and patent law, health and safety regulations, industry-specific regulations, antitrust laws."],
      ["E — Environmental","Climate change, environmental regulations, carbon commitments, weather patterns, resource scarcity, sustainability expectations from customers and investors."],
    ],
    process:[
      "Define the scope: which geography, market, and time horizon (typically 3–5 years)?",
      "For each PESTLE factor, identify the key forces at play and their current trajectory",
      "Assess the impact of each force on your specific business: high, medium, or low",
      "Identify which forces represent opportunities and which represent threats",
      "Prioritise the top 5–8 forces with highest impact and feed them into your SWOT Threats and Opportunities",
      "Assign monitoring responsibilities — someone must track each key force on an ongoing basis",
    ],
    when_list:[
      "Before entering a new geographic market",
      "During annual long-range strategic planning",
      "When developing scenario plans for the next 5–10 years",
      "Board-level risk assessment and governance reviews",
      "Major capital allocation decisions that span multiple years",
    ],
    pitfalls:[
      "Producing a long list of factors without assessing their probability or impact",
      "Treating PESTLE as a one-time exercise — macro forces shift; review at least annually",
      "Not connecting PESTLE insights to SWOT and strategic decisions",
      "Confusing PESTLE (macro environment) with Porter's Five Forces (industry environment)",
    ],
    software:["Miro","Notion","Lucidchart","Oxford Analytica (intelligence feeds)","Tableau (data visualisation for trends)","Bloomberg (economic data)"],
  },

  {
    id:4, section:'analyse', theme:'crimson',
    name:"Value Chain Analysis",
    question:"Where in our operations do we actually create value, and where do we leak it?",
    summary:"Porter's framework that disaggregates an organisation into its strategically distinct activities — primary and support — to identify which activities drive competitive advantage, which create unnecessary cost, and where outsourcing makes sense.",
    tags:['Operations','Cost Analysis','Competitive Advantage'],
    roles:['Operations Director','CFO','Strategy Teams','Consulting Engagements'],
    when:"Use when analysing operational efficiency, identifying cost reduction opportunities, or understanding where competitive advantage is truly built.",
    overview:"Value Chain Analysis was introduced by Michael Porter in his 1985 book 'Competitive Advantage.' It provides a systematic way to examine every activity a company performs and understand how they contribute to competitive advantage. Porter divided activities into Primary Activities (directly involved in creating and delivering the product) and Support Activities (enabling the primary activities). The insight is that competitive advantage comes not just from what you do, but from how well individual activities work together as a system.",
    problem:"Many organisations have no clear picture of which internal activities truly drive their competitive advantage and which are simply overhead. Without this understanding, cost reduction efforts often cut value-creating activities while sparing wasteful ones, and outsourcing decisions are made on gut feel rather than strategic logic.",
    components:[
      ["Inbound Logistics","Receiving, storing, and distributing raw materials. Includes supplier relationships, warehousing, inventory management."],
      ["Operations","Transforming inputs into the final product or service. Manufacturing, assembly, packaging, quality control."],
      ["Outbound Logistics","Delivering the finished product to customers. Order fulfilment, distribution, warehousing of finished goods."],
      ["Marketing & Sales","Activities that allow customers to purchase the product. Advertising, pricing, channel management, sales force."],
      ["Service","Activities that maintain and enhance the product's value after purchase. Installation, repair, customer support, training."],
      ["Support: Procurement","Purchasing inputs used in the primary activities."],
      ["Support: Technology","R&D, product design, process improvement, IT systems."],
      ["Support: HR","Recruiting, training, compensation, performance management."],
      ["Support: Firm Infrastructure","General management, finance, legal, planning."],
    ],
    process:[
      "Map all primary and support activities for your specific business",
      "For each activity, identify the costs incurred",
      "Identify which activities create the most customer value — these are your differentiators",
      "Identify activities where you have a cost advantage or disadvantage vs competitors",
      "Look for linkages: how do activities interact? Improving one often improves others",
      "Identify outsourcing candidates: activities where a third party can deliver better value at lower cost",
      "Design strategic interventions to strengthen differentiating activities",
    ],
    when_list:[
      "Cost reduction and operational efficiency programmes",
      "Make-or-buy and outsourcing decisions",
      "Merger integration — identifying overlapping activities",
      "Competitor benchmarking — mapping a competitor's value chain to find their weak points",
      "Digital transformation planning — identifying which activities automation can enhance",
    ],
    pitfalls:[
      "Mapping activities at too high a level — go deep enough that meaningful differences are visible",
      "Focusing only on cost reduction and missing value-creation opportunities",
      "Treating each activity in isolation — the linkages between activities often matter more",
      "Not comparing your value chain to competitors — analysis without benchmarking misses strategic insights",
    ],
    software:["Lucidchart","Miro","Visio","SAP (operational data)","Tableau (cost analysis)","PowerPoint"],
  },

  // ── SECTION 2: POSITION ─────────────────────────────────
  {
    id:5, section:'position', theme:'forest',
    name:"Blue Ocean Strategy",
    question:"How do we make the competition irrelevant by creating new market space?",
    summary:"W. Chan Kim and Renée Mauborgne's landmark framework that challenges the assumption that companies must compete in existing markets ('red oceans') — showing how the most profitable moves create entirely new demand in uncontested market space.",
    tags:['Innovation','Market Creation','Differentiation'],
    roles:['CEO','Product Strategy','Innovation Teams','Board Level'],
    when:"Use when you're trapped in an intensely competitive market, when margins are eroding despite good execution, or when searching for the next growth horizon.",
    overview:"Blue Ocean Strategy was developed by INSEAD professors W. Chan Kim and Renée Mauborgne and published in their 2005 Harvard Business Review article and subsequent book of the same name. Analysing 150 strategic moves across 30 industries over 100 years, they found that lasting profitable growth comes not from battling competitors in crowded markets ('red oceans') but from creating new market space — 'blue oceans' — where competition is irrelevant. The framework's key tools are the Strategy Canvas and the Four Actions Framework.",
    problem:"Most strategy is about competing better in existing markets. This leads to relentless head-to-head competition, price wars, commoditisation, and shrinking margins. Blue Ocean Strategy redirects the strategic question from 'how do we beat competitors?' to 'how do we make competitors irrelevant?'",
    components:[
      ["Red Ocean vs Blue Ocean","Red oceans: existing industries where competition is intense and growth is limited. Blue oceans: new market spaces, either entirely new industries or redefined boundaries of existing ones."],
      ["Value Innovation","The simultaneous pursuit of differentiation AND low cost. Blue Ocean companies don't trade off between the two — they reconstruct buyer value elements to achieve both."],
      ["Strategy Canvas","A one-page visual that maps how you and your competitors invest across competing factors. Reveals where you can differentiate and where you're spending on factors customers don't value."],
      ["Four Actions Framework","ERRC Grid: Eliminate (which factors can you remove entirely?), Reduce (which factors can you cut below industry standard?), Raise (which factors should be raised above industry standard?), Create (which factors can you create that the industry has never offered?)."],
      ["Three Tiers of Non-Customers","Soon-to-be: on the edge of your market. Refusing: consciously choosing alternatives. Unexplored: in untouched markets. Blue Oceans are often found by converting non-customers."],
    ],
    process:[
      "Draw the current Strategy Canvas: what factors does your industry compete on? How do you and key competitors score on each?",
      "Identify the factors that define the industry — even if no one questions them",
      "Apply the ERRC Grid to each factor: what can be eliminated, reduced, raised, or created?",
      "Look beyond existing customers: who are the three tiers of non-customers and why don't they use your product?",
      "Construct a new value curve that diverges from competitors and creates a compelling new story",
      "Test the Blue Ocean move against three criteria: focus, divergence, compelling tagline",
    ],
    when_list:[
      "When industry margins are declining and competition is intensifying",
      "Long-range strategic planning (5–10 year horizon)",
      "When new technology enables a fundamentally different way of delivering value",
      "Post-market-entry review: has our Red Ocean strategy hit its limits?",
      "Innovation workshops exploring the next growth horizon",
    ],
    pitfalls:[
      "Confusing product innovation with Blue Ocean strategy — technology alone does not create a blue ocean",
      "Creating a blue ocean without a plan to retain it — first-mover advantage erodes without execution barriers",
      "Applying Blue Ocean thinking to short-term operational problems — it is a long-term strategic tool",
      "Skipping the Strategy Canvas — without the visual, teams default to incremental thinking",
    ],
    software:["Strategyzer","Miro (Strategy Canvas templates)","Mural","PowerPoint","Blue Ocean Strategy's own online tools"],
  },

  {
    id:6, section:'position', theme:'forest',
    name:"BCG Growth-Share Matrix",
    question:"Which of our businesses should we invest in, maintain, harvest, or divest?",
    summary:"The Boston Consulting Group's portfolio management tool that classifies business units by market growth rate and relative market share — enabling leadership to make explicit investment allocation decisions across a diversified portfolio.",
    tags:['Portfolio Strategy','Investment Allocation','Diversification'],
    roles:['CEO','CFO','Corporate Strategy','Private Equity','Divisional Heads'],
    when:"Use to make explicit capital allocation decisions across a portfolio of businesses or products, particularly in large diversified organisations.",
    overview:"The BCG Growth-Share Matrix was created by Bruce Henderson of the Boston Consulting Group in 1970. It became one of the most widely used — and widely debated — tools in corporate strategy. By plotting business units on a two-by-two grid (market growth rate vs relative market share), it provides a visual framework for portfolio investment decisions and brings discipline to what had previously been subjective capital allocation processes.",
    problem:"Diversified organisations often allocate capital based on internal politics — whoever lobbies most effectively wins the budget. The BCG Matrix imposes an analytical framework on this process, ensuring that high-potential businesses get the investment they need while cash-generating businesses fund the portfolio.",
    components:[
      ["Stars (High Growth, High Share)","Market leaders in fast-growing markets. Require significant investment to maintain position. The goal is to protect their market share as growth slows — turning them into Cash Cows."],
      ["Cash Cows (Low Growth, High Share)","Market leaders in mature markets. Generate more cash than they need to maintain position. The strategic imperative is to harvest their cash to fund Stars and Question Marks."],
      ["Question Marks (High Growth, Low Share)","Business units in growing markets but with low market share. They consume cash but have uncertain futures. Management must decide: invest heavily to build market share (turn into Star) or divest."],
      ["Dogs (Low Growth, Low Share)","Business units in mature markets with low market share. They neither generate significant cash nor have growth potential. Typically candidates for divestiture or liquidation."],
    ],
    process:[
      "Define your business units or product lines clearly",
      "Estimate the market growth rate for each unit's industry (high = above 10% per year is a common threshold)",
      "Calculate each unit's relative market share (your share ÷ largest competitor's share)",
      "Plot all units on the matrix — use bubble size to represent revenue or profit",
      "For each quadrant, define the strategic imperative: invest, hold, harvest, or divest",
      "Ensure the Cash Cow cash flows are explicitly directed to fund Stars and selected Question Marks",
    ],
    when_list:[
      "Annual corporate portfolio review",
      "Capital budget allocation across business units",
      "M&A strategy: what gaps in the portfolio need filling?",
      "Private equity portfolio management",
      "Rationalising a product portfolio that has grown unwieldy",
    ],
    pitfalls:[
      "Oversimplifying: market share is not always a proxy for profitability or competitive position",
      "Treating Dogs as always worth divesting — some Dogs generate stable cash and strategic options",
      "Using the BCG Matrix for a single-product business — it is designed for portfolio management",
      "Not updating the matrix regularly — market positions shift quickly",
    ],
    software:["Tableau","Power BI","Excel","Miro (portfolio mapping)","Strategyzer","PowerPoint"],
  },

  {
    id:7, section:'position', theme:'forest',
    name:"Ansoff Matrix",
    question:"What is the right growth strategy given our current products and markets?",
    summary:"Igor Ansoff's four-quadrant growth strategy model — Market Penetration, Market Development, Product Development, Diversification — that maps risk against strategic ambition, giving leadership a clear framework for growth investment decisions.",
    tags:['Growth Strategy','Risk Assessment','Market Entry'],
    roles:['CEO','CMO','Strategy Director','Business Development'],
    when:"Use when evaluating growth options, allocating a growth budget across different strategies, or setting the strategic direction for the next planning cycle.",
    overview:"The Ansoff Matrix was developed by Igor Ansoff and published in the Harvard Business Review in 1957 in an article titled 'Strategies for Diversification.' It remains one of the most cited and most practical frameworks in business strategy — not because it is complex, but because it makes an important strategic choice explicit: should we grow by selling more of what we already have to customers we already know, or should we enter new territory — and how risky is each path?",
    problem:"Leadership teams often debate growth strategy without a shared framework for comparing options. Is expanding into a new market better than deepening penetration at home? Is a new product line worth the investment? The Ansoff Matrix provides a common language and a risk calibration tool for these decisions.",
    components:[
      ["Market Penetration (Existing Product, Existing Market)","The lowest-risk strategy: sell more of existing products to existing customers. Tactics: pricing, promotions, increased distribution, competitive conquest. Best when the market is not yet saturated."],
      ["Market Development (Existing Product, New Market)","Take existing products to new geographies, segments, or customer types. Medium risk: you understand the product but not the new customer. Best when existing markets are saturated."],
      ["Product Development (New Product, Existing Market)","Develop new products or services for existing customers. Medium risk: you understand the customer but are taking on product development risk. Best when you have strong customer relationships and R&D capability."],
      ["Diversification (New Product, New Market)","The highest-risk strategy: enter new markets with new products. Related diversification (adjacent to your core) is less risky than unrelated (conglomerate) diversification."],
    ],
    process:[
      "Map your current product portfolio and customer markets",
      "For each growth opportunity under consideration, place it in the appropriate Ansoff quadrant",
      "Assess the capability requirements and risk level of each strategy",
      "Allocate growth investment proportionally: most resource to Market Penetration, less to diversification",
      "Identify the specific capabilities needed for higher-risk quadrant strategies — do you have them, or do you need to acquire them?",
    ],
    when_list:[
      "Annual growth strategy planning — choosing where to invest",
      "Evaluating a new market entry or product launch proposal",
      "Post-market saturation: what is the next growth lever?",
      "Board-level portfolio strategy conversations",
      "Helping leadership teams achieve alignment on strategic direction",
    ],
    pitfalls:[
      "Pursuing all four strategies simultaneously — resource dilution leads to underperformance across the board",
      "Underestimating the risk of diversification — most corporate diversification destroys value",
      "Not assessing capability gaps before committing to higher-risk quadrants",
      "Confusing the matrix as a decision tool with it being an analysis tool — it frames choices, it doesn't make them",
    ],
    software:["Miro (Ansoff templates)","PowerPoint","Lucidchart","Notion","Strategyzer"],
  },

  {
    id:8, section:'position', theme:'forest',
    name:"Porter's Generic Strategies",
    question:"Are we competing on cost, differentiation, or focus — and are we truly committed to one?",
    summary:"Michael Porter's foundational model that defines three viable strategic positions — Cost Leadership, Differentiation, and Focus — and warns that being 'stuck in the middle' without a clear choice leads to persistently below-average performance.",
    tags:['Competitive Strategy','Positioning','Strategic Choice'],
    roles:['CEO','Strategy Director','Marketing Leadership','Business Unit Heads'],
    when:"Use when defining or clarifying your fundamental competitive position — especially when a business is pursuing multiple strategies simultaneously without clear prioritisation.",
    overview:"Porter introduced the three Generic Strategies in his 1980 book 'Competitive Strategy.' The central thesis is deceptively simple: to achieve above-average performance, a firm must make a clear choice about how it will compete. Companies that try to pursue cost leadership and differentiation simultaneously — without a clear focus — end up 'stuck in the middle' and earn below-average returns. This framework forces the strategic clarity that many organisations avoid.",
    problem:"Many organisations try to be all things to all customers — low-cost and premium, broad and focused. Porter's research showed that this strategic ambiguity leads to consistent underperformance. The framework forces the uncomfortable but necessary question: what are we actually choosing to be?",
    components:[
      ["Cost Leadership","Achieving the lowest cost of production in the industry. Enables the firm to either undercut competitors on price OR earn higher margins at market price. Requires: scale economies, operational efficiency, tight cost control, minimal R&D."],
      ["Differentiation","Offering something unique that customers value and are willing to pay a premium for. Not just product features — can be brand, service, delivery, design, or experience. Requires: innovation, strong marketing, superior product development."],
      ["Cost Focus","Serving a narrow target segment with the lowest cost. The firm has a cost advantage in its specific niche that broader competitors cannot easily replicate."],
      ["Differentiation Focus","Serving a narrow target segment with a uniquely differentiated offering. The firm understands a specific segment's needs better than anyone else."],
      ["Stuck in the Middle","Attempting all strategies simultaneously without excelling at any. Results in below-average profitability. The most important warning this framework offers."],
    ],
    process:[
      "Honestly assess where you sit today: cost leader, differentiator, or focused in some niche?",
      "Evaluate your competitive advantages: what do you do better than anyone?",
      "Examine your cost structure vs competitors: do you have an inherent cost advantage?",
      "Test for 'stuck in the middle': are you asking your organisation to excel at both cost and differentiation simultaneously?",
      "Make the strategic choice explicitly — document it, communicate it, and make resource allocation decisions consistent with it",
    ],
    when_list:[
      "Defining or refreshing the core competitive strategy",
      "When margins are declining without a clear diagnosis of why",
      "Pre-growth investment: does your strategy support scale?",
      "When acquisitions or expansions are being considered",
      "Leadership team alignment workshops on strategic direction",
    ],
    pitfalls:[
      "Believing you can be both the lowest-cost AND most differentiated — very rare and usually unsustainable",
      "Choosing differentiation without genuine willingness to let go of cost parity ambitions",
      "Not making the choice explicit — 'stuck in the middle' is usually the result of avoided decisions, not active choice",
      "Confusing operational effectiveness (doing things well) with strategy (doing different things)",
    ],
    software:["Miro","PowerPoint","Notion","Strategyzer","Any workshop facilitation tool"],
  },

  // ── SECTION 3: EXECUTE ─────────────────────────────────
  {
    id:9, section:'execute', theme:'slate',
    name:"Business Model Canvas",
    question:"How does our organisation create, deliver, and capture value — and is the logic sound?",
    summary:"Alexander Osterwalder's nine-block visual template that maps every element of a business model on a single page — enabling leadership teams to design, test, and stress-test how the business creates and captures value.",
    tags:['Business Model','Value Proposition','Strategy Design'],
    roles:['Founders','Strategy Teams','Innovation Labs','Business Development'],
    when:"Use when designing a new business or product line, pivoting, evaluating a competitor's model, or stress-testing whether your current model is sustainable.",
    overview:"The Business Model Canvas was developed by Alexander Osterwalder and introduced in his 2010 book 'Business Model Generation' (co-authored with Yves Pigneur). It distils the essence of a business model into nine interconnected building blocks on a single visual canvas. Before the BMC, business models were described in 40-page business plans that were hard to iterate, share, and stress-test. The canvas made business model design a live, collaborative, visual process.",
    problem:"Traditional business plans describe what a business will do but rarely expose the underlying logic — the relationships between customer segments, value propositions, channels, and cost structures. The Business Model Canvas makes these relationships visible, so the team can test whether the logic is sound before investing heavily in execution.",
    components:[
      ["Customer Segments","Who are we creating value for? Define distinct groups by their specific needs. Avoid 'everyone' — the most powerful business models serve well-defined segments."],
      ["Value Propositions","What problems do we solve? What needs do we satisfy? The value proposition must be distinct for each customer segment."],
      ["Channels","How do we reach and deliver value to our customer segments? Includes awareness, evaluation, purchase, delivery, and after-sales."],
      ["Customer Relationships","What type of relationship does each segment expect? Ranges from self-service to personal assistance to community."],
      ["Revenue Streams","How does the organisation generate revenue from each customer segment? What are customers really paying for?"],
      ["Key Resources","What assets are absolutely required to deliver the value proposition? Physical, intellectual, human, financial."],
      ["Key Activities","What activities must the organisation perform exceptionally well?"],
      ["Key Partnerships","Who are our key suppliers and partners? Which resources or activities are we outsourcing?"],
      ["Cost Structure","What are the most important costs inherent in the business model?"],
    ],
    process:[
      "Start with Customer Segments and Value Propositions — these are the core of the model",
      "Work outward: how do you reach customers (Channels) and what relationship do they expect?",
      "Define Revenue Streams for each segment",
      "Define the infrastructure: Key Resources, Key Activities, Key Partnerships",
      "Define the Cost Structure",
      "Stress-test: does the Revenue Stream logic justify the Cost Structure?",
      "Use the Fit Test: does each element of the right side (customer-facing) align with the left side (infrastructure)?",
    ],
    when_list:[
      "New venture design and startup pitch preparation",
      "Business model innovation projects",
      "Evaluating a potential acquisition — map their BMC and compare to yours",
      "Strategy workshops to align leadership on how the business actually works",
      "When entering a new market or launching a new product line",
    ],
    pitfalls:[
      "Filling in the canvas with aspirations rather than current reality — be honest about what exists today vs what is planned",
      "Treating the canvas as a one-time exercise — revisit it after major market or internal shifts",
      "Not testing Customer Segments and Value Propositions with actual customers before committing",
      "Ignoring the cost/revenue logic — beautiful canvases with unsustainable unit economics fail in practice",
    ],
    software:["Strategyzer (official BMC tool)","Miro","Mural","Canvanizer","Notion","FigJam"],
  },

  {
    id:10, section:'execute', theme:'slate',
    name:"McKinsey 7-S Framework",
    question:"Are all seven elements of our organisation aligned to execute our strategy?",
    summary:"McKinsey's model that identifies seven interdependent organisational elements — Strategy, Structure, Systems, Shared Values, Style, Staff, and Skills — showing that sustainable strategy execution requires alignment across all seven, not just the 'hard' ones.",
    tags:['Organisational Design','Change Management','Execution'],
    roles:['CEO','CHRO','Transformation Teams','Strategy & Operations','Consultants'],
    when:"Use during major transformation programmes, post-merger integration, strategy refresh, or any time execution is underperforming the strategic plan.",
    overview:"The McKinsey 7-S Framework was developed by Tom Peters and Robert Waterman at McKinsey & Company in the late 1970s and published in their 1982 book 'In Search of Excellence.' It emerged from the observation that most strategy frameworks focused on the 'hard' elements of organisation — strategy and structure — while ignoring the 'soft' elements that actually drive execution. The framework became a cornerstone of organisational design and change management.",
    problem:"Many well-designed strategies fail not because the strategy is wrong but because the organisation is not structured, staffed, or culturally equipped to execute it. The 7-S Framework reveals the hidden misalignments between strategy and organisation that cause execution failures.",
    components:[
      ["Strategy (Hard)","The plan to achieve competitive advantage. The direction the organisation has chosen."],
      ["Structure (Hard)","How the organisation is divided and coordinated. Reporting lines, divisions, spans of control."],
      ["Systems (Hard)","The processes and procedures. Financial reporting, HR systems, IT infrastructure, performance management."],
      ["Shared Values (Soft — Centre)","The core values and beliefs that guide the organisation's culture. Central in the model because all other elements align to them."],
      ["Style (Soft)","The leadership and management style. How leaders actually behave, not how they say they behave."],
      ["Staff (Soft)","The people in the organisation. Their capabilities, experience, motivations, and demographics."],
      ["Skills (Soft)","The distinctive capabilities of the organisation as a whole — what it does better than competitors."],
    ],
    process:[
      "Map the current state of all seven elements honestly",
      "Identify where elements are misaligned with each other — particularly where they conflict with strategy",
      "Identify the most critical misalignments — not everything can be fixed simultaneously",
      "Design the target state for each element, ensuring mutual alignment",
      "Sequence change initiatives: typically start with Structure and Systems (most controllable) while working to shift Style and Shared Values over time",
      "Review alignment regularly — as strategy evolves, the 7-S alignment must be re-examined",
    ],
    when_list:[
      "Post-merger integration planning — mapping both organisations' 7-S elements to find misalignments",
      "Major transformation or change management programmes",
      "When strategy execution is consistently underdelivering",
      "Organisational redesign projects",
      "Leadership team diagnostics and effectiveness reviews",
    ],
    pitfalls:[
      "Treating the 7-S as a checklist rather than a system — the interdependencies between elements are the real insight",
      "Focusing only on Hard elements and assuming Soft elements will follow",
      "Underestimating how difficult it is to change Shared Values and Style — these take years, not months",
      "Not assigning ownership for each element's alignment during transformation",
    ],
    software:["Miro (7-S mapping templates)","Lucidchart","PowerPoint","Notion","OrgVue (organisational design)"],
  },

  {
    id:11, section:'execute', theme:'slate',
    name:"Wardley Mapping",
    question:"Where on the evolution curve do our capabilities sit, and where should we invest or outsource?",
    summary:"Simon Wardley's situational awareness framework that maps an organisation's value chain against an evolution axis — from Genesis to Commodity — revealing where to innovate, where to use off-the-shelf solutions, and where competitors will attack next.",
    tags:['Technology Strategy','Evolution','Situational Awareness'],
    roles:['CTO','Strategy Teams','Technology Leaders','Product Leaders'],
    when:"Use when making technology investment decisions, planning cloud strategy, evaluating build-vs-buy decisions, or anticipating competitor moves in technology-driven markets.",
    overview:"Wardley Mapping was developed by Simon Wardley and first described publicly around 2005. It is the least well-known of the 12 frameworks in this guide, but arguably one of the most powerful for technology-driven organisations. The map plots a value chain vertically (anchor/user need at top, component activities below) against an evolution axis horizontally (Genesis → Custom → Product → Commodity). It reveals not just where you are, but where everything is going — enabling anticipatory rather than reactive strategy.",
    problem:"Technology strategy is often made with incomplete situational awareness — teams don't know whether a given capability is a competitive differentiator worth investing in or a commodity that should be outsourced to the cheapest provider. Wardley Mapping provides the situational awareness to answer this question.",
    components:[
      ["Value Chain (Y-Axis)","The chain of activities from user need (top) to underlying components (bottom). Similar to Porter's Value Chain but oriented toward the user's need."],
      ["Evolution Axis (X-Axis)","Genesis: novel, uncertain, expensive. Custom: improving, still differentiated. Product/Rental: standardised, bought off-the-shelf. Commodity/Utility: ubiquitous, low-cost, invisible. Everything evolves left to right over time."],
      ["Components","Individual activities, capabilities, or assets plotted on the map. Where they sit on the evolution axis determines the right management approach."],
      ["Climatic Patterns","Predictable forces that act on all maps: everything evolves, supply and demand competition erodes margins, new Genesis always emerges. Understanding these allows anticipatory moves."],
      ["Gameplay","Strategic moves made possible by reading the map: exploit, block, open, poison, fool, etc. This is where Wardley Mapping becomes competitive strategy."],
    ],
    process:[
      "Identify the user need at the top of your value chain",
      "Map the components needed to serve that need, vertically (most visible to user at top)",
      "Place each component on the evolution axis based on its current maturity",
      "Draw dependencies between components",
      "Identify which components are evolving rapidly (will become commodity soon)",
      "Decide: invest (Genesis/Custom components that are differentiators), outsource (Commodity components), or migrate (shift to cloud/utility services)",
    ],
    when_list:[
      "Technology and cloud strategy planning",
      "Build-vs-buy-vs-partner decisions",
      "Anticipating where a market is evolving over 3–5 years",
      "Identifying where a startup could disrupt your value chain",
      "Digital transformation strategy",
    ],
    pitfalls:[
      "Building a map alone — Wardley Maps are most valuable when built collaboratively with the team",
      "Treating the map as a one-time deliverable rather than an evolving strategic tool",
      "Not acting on the map's implications — the map is only useful if it drives investment and outsourcing decisions",
      "Starting too broadly — begin with a specific user need and its value chain, not the entire organisation",
    ],
    software:["Wardley Maps online tool (wardleymaps.com)","MapScript","Miro","OmniGraffle","draw.io"],
  },

  {
    id:12, section:'execute', theme:'slate',
    name:"First Principles Thinking",
    question:"If we stripped away all assumptions, what would we actually build from scratch?",
    summary:"A reasoning methodology — used by Elon Musk, Jeff Bezos, and pioneered by Aristotle — that breaks problems down to their fundamental truths and builds solutions from the ground up, unconstrained by industry convention and analogical thinking.",
    tags:['Innovation','Problem Solving','Mental Models'],
    roles:['Founders','Product Leaders','R&D Teams','Any Strategic Decision Maker'],
    when:"Use when facing a problem that convention says is too expensive, impossible, or already 'solved' — and when you suspect the conventional wisdom is wrong.",
    overview:"First Principles Thinking is not a framework in the traditional sense — it is a reasoning methodology with roots in Aristotle's philosophy of science. Aristotle defined a first principle as 'the first basis from which a thing is known.' Elon Musk popularised it as a business tool, famously using it to reduce rocket manufacturing costs by 90% (SpaceX) and battery pack costs from $600/kWh to under $80/kWh (Tesla). It has since become a foundational mental model in the strategy and innovation community.",
    problem:"Most strategic thinking is analogical: 'we'll do it like X did it' or 'the industry standard is Y.' Analogical thinking is fast and often useful, but it reproduces the assumptions and constraints of whatever was done before. First principles thinking asks: what is actually, fundamentally true about this problem? What would we do if we were starting from zero?",
    components:[
      ["Identify Assumptions","List every assumption embedded in the current approach. What is taken for granted? What does 'everyone know' that might not be true?"],
      ["Break Down to Fundamentals","For each assumption, ask: is this physically, economically, or logically necessary? Or is it a convention? Drill down to what is actually, irreducibly true."],
      ["Reason Up from Fundamentals","Starting from only what is true, what solution would you design? What becomes possible if you ignore convention?"],
      ["Socratic Questioning","The method: Why? → Why is that true? → What evidence supports this? → What if the opposite were true? → What is the most fundamental constraint here?"],
      ["The 5 Whys (applied to assumptions)","Iteratively asking 'why' until you reach a bedrock truth rather than an inherited assumption."],
    ],
    process:[
      "State the problem clearly",
      "List all the current assumptions about how the problem is solved or why it is hard",
      "Challenge each assumption: is this a physical law or a convention?",
      "Identify the bedrock truths: what is irreducibly, demonstrably true?",
      "From these truths only, generate possible solutions",
      "Compare first-principles solutions to conventional approaches — the gap reveals the opportunity",
    ],
    when_list:[
      "When market convention says something is too expensive or impossible",
      "During product strategy: 'is there a fundamentally better way to solve this customer problem?'",
      "When competitive advantage is eroding and incremental improvement is insufficient",
      "Evaluating supplier or technology costs: are we paying for convention or necessity?",
      "Startup strategy: designing a business model unconstrained by incumbents' assumptions",
    ],
    pitfalls:[
      "Applying first principles to every decision — it is time-intensive and reserved for high-stakes strategic questions",
      "Reaching false 'first principles' by stopping questioning too early",
      "Ignoring practical constraints that are genuinely non-negotiable (regulatory, safety)",
      "Using first principles as a justification for ignoring all evidence from prior attempts — history still has lessons",
    ],
    software:["No dedicated software — requires facilitated workshop","Miro (structured thinking templates)","Notion (assumption mapping)","Any whiteboard"],
  },
];

// ── HELPERS ──────────────────────────────────────────────
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const THEME_COLORS = { crimson:'#8b1a1a', forest:'#1a5c38', slate:'#1e3a5f' };

// ── PROGRESS BAR ─────────────────────────────────────────
function initProgress() {
  const bar = $('#progressBar');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ── NAV ───────────────────────────────────────────────────
function initNav() {
  const nav = $('#nav');
  const toTop = $('#toTop');
  const burger = $('#burger');
  const mob = $('#mobPanel');
  const links = $$('.navl[data-s]');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('raised', y > 60);
    toTop.classList.toggle('show', y > 700);
    let cur = '';
    $$('.section[id]').forEach(s => {
      if (s.offsetTop - 100 <= y) cur = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.s === cur));
  }, { passive: true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mob.classList.toggle('open');
  });
  $$('.mob-link').forEach(l => l.addEventListener('click', () => {
    burger.classList.remove('open');
    mob.classList.remove('open');
  }));
}

// ── ASIDE INDEX ───────────────────────────────────────────
function buildAsideIndex() {
  const el = $('#asideIndex');
  if (!el) return;
  FRAMEWORKS.forEach(f => {
    const item = document.createElement('div');
    item.className = 'aside-item';
    item.innerHTML = `<span class="aside-n">0${f.id}</span><span>${f.name}</span>`;
    item.addEventListener('click', () => openModal(f.id));
    el.appendChild(item);
  });
}

// ── HERO CARD GRID ────────────────────────────────────────
function buildHeroCards() {
  const grid = $('#heroCardGrid');
  if (!grid) return;
  const picks = [1, 5, 9, 3, 8, 12];
  picks.forEach(id => {
    const f = FRAMEWORKS.find(x => x.id === id);
    if (!f) return;
    const c = THEME_COLORS[f.theme];
    const card = document.createElement('div');
    card.className = 'hcg-card';
    card.style.borderTop = `2px solid ${c}`;
    card.innerHTML = `<div class="hcg-n" style="color:${c}">0${f.id}</div><div class="hcg-name">${f.name}</div>`;
    card.addEventListener('click', () => openModal(f.id));
    grid.appendChild(card);
  });
}

// ── BUILD FRAMEWORK ROWS ──────────────────────────────────
function buildRows() {
  const map = { analyse:'stack-analyse', position:'stack-position', execute:'stack-execute' };
  FRAMEWORKS.forEach((f, idx) => {
    const container = $('#' + map[f.section]);
    if (!container) return;
    const c = THEME_COLORS[f.theme];
    const section = container.closest('.section');
    const theme = section ? section.dataset.theme : f.theme;

    const row = document.createElement('div');
    row.className = 'fw-row';
    row.style.transitionDelay = `${(idx % 4) * 60}ms`;

    row.innerHTML = `
      <div class="fw-text">
        <div class="fw-num">Framework 0${f.id}</div>
        <div class="fw-name">${f.name}</div>
        <div class="fw-question">${f.question}</div>
        <p class="fw-summary">${f.summary}</p>
        <div class="fw-tags">${f.tags.map(t => `<span class="fw-tag">${t}</span>`).join('')}</div>
        <button class="fw-btn" data-id="${f.id}">Read Full Framework →</button>
      </div>
      <div class="fw-visual">
        <div class="fw-visual-bg">0${f.id}</div>
        <div>
          <span class="fw-roles-label">Who Uses It</span>
          <div class="fw-roles-list">${f.roles.join('<br>')}</div>
        </div>
        <div class="fw-when">
          <span class="fw-when-label">When to Use</span>
          <p class="fw-when-text">${f.when}</p>
        </div>
      </div>
    `;

    row.addEventListener('click', () => openModal(f.id));
    container.appendChild(row);
  });
}

// ── INTERSECTION OBSERVER ─────────────────────────────────
function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  $$('.fw-row').forEach(r => obs.observe(r));
}

// ── ALL 12 GRID ───────────────────────────────────────────
function buildAll12() {
  const grid = $('#all12Grid');
  if (!grid) return;
  const sectionColors = { analyse:'#8b1a1a', position:'#1a5c38', execute:'#1e3a5f' };
  FRAMEWORKS.forEach(f => {
    const c = sectionColors[f.section];
    const cell = document.createElement('div');
    cell.className = 'a12-cell';
    cell.innerHTML = `
      <div class="a12-bar" style="background:${c}"></div>
      <div class="a12-n" style="color:${c}55; font-family:var(--mono); font-size:.62rem; letter-spacing:.1em;">0${f.id} — ${f.section.toUpperCase()}</div>
      <div class="a12-name">${f.name}</div>
      <div class="a12-q">${f.question}</div>
    `;
    cell.addEventListener('click', () => openModal(f.id));
    grid.appendChild(cell);
  });
}

// ── MODAL ─────────────────────────────────────────────────
function openModal(id) {
  const f = FRAMEWORKS.find(x => x.id === id);
  if (!f) return;
  const c = THEME_COLORS[f.theme];

  const body = $('#modalBody');
  body.innerHTML = `
    <div class="mb-flag" style="background:${c}"></div>
    <div class="mb-head">
      <div class="mb-eyebrow" style="color:${c}">Framework 0${f.id} · ${f.section.charAt(0).toUpperCase()+f.section.slice(1)}</div>
      <div class="mb-title">${f.name}</div>
      <div class="mb-q">${f.question}</div>
      <div class="mb-tags">${f.tags.map(t => `<span class="mb-tag" style="color:${c};border-color:${c}44;background:${c}0d">${t}</span>`).join('')}</div>
    </div>
    <div style="padding:0 2.5rem 3rem">
      <div class="mb-label" style="color:${c}">Overview</div>
      <p class="mb-text">${f.overview}</p>

      <div class="mb-label" style="color:${c}">The Problem It Solves</div>
      <p class="mb-text">${f.problem}</p>

      <div class="mb-label" style="color:${c}">Core Components</div>
      <table class="mb-table">
        <thead><tr>
          <th style="color:${c}">Component</th>
          <th style="color:${c}">Description</th>
        </tr></thead>
        <tbody>${f.components.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</tbody>
      </table>

      <div class="mb-label" style="color:${c}">How to Apply It</div>
      <ul class="mb-list">${f.process.map(p => `<li>${p}</li>`).join('')}</ul>

      <div class="mb-label" style="color:${c}">When to Use It</div>
      <ul class="mb-list">${f.when_list.map(w => `<li>${w}</li>`).join('')}</ul>

      <div class="mb-label" style="color:${c}">Common Pitfalls</div>
      <ul class="mb-list">${f.pitfalls.map(p => `<li>${p}</li>`).join('')}</ul>

      <div class="mb-label" style="color:${c}">Who Is Involved</div>
      <div class="mb-pills" style="margin-bottom:1.5rem">${f.roles.map(r => `<span class="mb-pill" style="border-top:2px solid ${c}">${r}</span>`).join('')}</div>

      <div class="mb-label" style="color:${c}">Software &amp; Tools</div>
      <div class="mb-pills">${f.software.map(s => `<span class="mb-pill">${s}</span>`).join('')}</div>
    </div>
  `;

  $('#modalVeil').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#modalSheet').scrollTop = 0;
}

function closeModal() {
  $('#modalVeil').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalVeil').addEventListener('click', e => { if (e.target === $('#modalVeil')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── BACK TOP ──────────────────────────────────────────────
function initBackTop() {
  $('#toTop').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  initNav();
  buildAsideIndex();
  buildHeroCards();
  buildRows();
  buildAll12();
  initModal();
  initBackTop();
  requestAnimationFrame(() => requestAnimationFrame(initObserver));
});
