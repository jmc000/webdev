import './main.css'

import { faArchway, faAd, faBrain } from '@fortawesome/free-solid-svg-icons'

// Utiliser uniquement les icônes archway, ad et brain
library.add(faArchway, faAd, faBrain)

// Remplacer toutes les balises <i class="fa..."> par un <svg> et utiliser un MutationObserver pour
// continuer à le faire quand le DOM change.
dom.watch()

