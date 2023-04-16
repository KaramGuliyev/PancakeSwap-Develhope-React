import { Link } from "react-router-dom"

function CompetitionPage() {

    return (
        <>
        <div class="ifo-body-top__pills">
          <div class="ifo-pill active">
            <Link>Latest</Link>
          </div>
          <div class="ifo-pill">
            <Link>Finished</Link>
          </div>
        </div>
        </>
    )
}

export default CompetitionPage