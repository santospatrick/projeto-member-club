import { getClientDetails } from "../services/client-details";
import { mountClientDetails } from "./sections/client-details";
import { mountFidelityPoints } from "./sections/fidelity-card";
import { mountHistoryLog } from "./sections/history-log";
import { mountMilestone } from "./sections/progress";

const form = document.querySelector('form');
const input = document.getElementById('id-cartao');

const MAXIMO_CARACTERES_INPUT = 15;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const clientDetails = await getClientDetails({ id: data['id-cartao'] })

    const { name, clientSince, appointmentHistory, image, loyaltyCard } = clientDetails;
    const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard;

    mountClientDetails({ name, clientSince, image })
    mountHistoryLog({ appointmentHistory })
    mountFidelityPoints({ id: data['id-cartao'], cutsNeeded, totalCuts })
    mountMilestone({ totalCuts, cutsNeeded, cutsRemaining })

    if (totalCuts >= cutsNeeded) {
        alert('Parabéns! Você atingiu a quantidade necessária de cortes para ganhar um brinde!')
    }
})

input.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '');

    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1-$2-$3-$4');

    value = value.substring(0, MAXIMO_CARACTERES_INPUT);

    event.target.value = value;
})