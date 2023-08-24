export function SkytellerCaseStudy() {
  return (
    <>
      <header className="lg:flex">
        <div className="lg:w-2/3 mx-auto lg:px-10">
          <h1>Skyteller - A Crypto Off-Ramp</h1>
          <p>
            Skyteller started as a dream to turn crypto into cash in just one
            click, and to make the whole crypto world more accessible and
            user-friendly.
          </p>
        </div>
      </header>
      <section className="case-study-section">
        <h3>My Role</h3>
        <p>Product designer and frontend engineer</p>

        <h3>Project Timeline</h3>
        <p>6mos</p>

        <h3>technologies</h3>
        <p>6 mos</p>
      </section>
      <section className="mb-12">
        <div className="bg-gray-100 lg:w-2/3 mx-auto overflow-hidden rounded-2xl">
          <img src="../images/crypto-magic.jpg" alt="Crypto Magic" />
        </div>
      </section>
      <section className="case-study-section">
        <p>
          We built a bridge to your bank, allowing you to off-ramp straight from
          your wallet or your personal Skyteller off-ramp contract. We were all
          about making digital dollars real in a simple, single transaction, and
          helping you tailor your cash flow, save for taxes, aggregate
          royalties, and more.
        </p>
      </section>
      <section className="case-study-section">
        <h3>Who is the user?</h3>
        <p>People who have a need to quickly turn crypto into cash.</p>
      </section>
      <section className="case-study-section">
        <h3>Implementation</h3>
        <p>
          A lot went into the magic that allowed users to convert crypto in
          their wallets to cash in their bank account.
        </p>

        <h4>Log in / Authentication</h4>
        <ul>
          <li>RainbowKit, for Sign in with Ethereum (log in)</li>
          <li>
            Chainwatcher, an internal service designed for real-time risk checks
          </li>
        </ul>

        <h4>Onboarding</h4>
        <ul>
          <li>Plaid, for connecting the user's destination bank account</li>
          <li>Persona, for identity verification and KYC</li>
        </ul>

        <h4>Web3 / Crypto Interaction</h4>
        <ul>
          <li>
            <a href="https://wagmi.sh/" target="_blank" rel="noreferrer">
              Wagmi
            </a>
            , React hooks for interacting with crypto wallets and contracts
          </li>
          <li>
            Uniswap, a web3 library for real-time market prices on crypto assets
          </li>
        </ul>
      </section>
    </>
  );
}
