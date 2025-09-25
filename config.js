// Configurazioni Supabase
const SUPABASE_CONFIG = {
    url: 'https://pnrjsisykqzwvcdjdyri.supabase.co', // Sostituisci con il tuo Project URL
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBucmpzaXN5a3F6d3ZjZGpkeXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MDM5MzAsImV4cCI6MjA3NDM3OTkzMH0.vpauNA2NYZlA9vIW7SItUvM3GuOxLAvFLdUQehNCQ-0' // Sostituisci con la tua Anon Key
};

// Configurazioni applicazione
const APP_CONFIG = {
    maxFutureMonths: 12,
    defaultCurrency: '€',
    dateFormat: 'DD/MM/YYYY',
    
    // Categorie predefinite (verranno inserite all'avvio se non esistenti)
    defaultCategories: [
        { nome: 'Vendite', tipo: 'entrata', colore: '#28a745', icona: 'euro' },
        { nome: 'Consulenze', tipo: 'entrata', colore: '#17a2b8', icona: 'briefcase' },
        { nome: 'Altro Entrate', tipo: 'entrata', colore: '#6f42c1', icona: 'plus' },
        
        { nome: 'Fornitori', tipo: 'uscita', colore: '#dc3545', icona: 'truck' },
        { nome: 'Stipendi', tipo: 'uscita', colore: '#fd7e14', icona: 'users' },
        { nome: 'Affitto', tipo: 'uscita', colore: '#6c757d', icona: 'home' },
        { nome: 'Utenze', tipo: 'uscita', colore: '#ffc107', icona: 'zap' },
        { nome: 'Spese Generali', tipo: 'uscita', colore: '#e83e8c', icona: 'shopping-cart' }
    ]
};

// Funzioni utility per configurazioni
const CONFIG_UTILS = {
    // Formatta importo con va
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        }).format(amount);
    },
    
    // Formatta data in formato italiano
    formatDate: (date) => {
        return new Date(date).toLocaleDateString('it-IT');
    },
    
    // Converte stringa data in formato ISO
    parseDate: (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(year, month - 1, day).toISOString().split('T')[0];
    }
};
