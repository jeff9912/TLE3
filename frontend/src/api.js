const BASE_URL = 'http://localhost:3001/api';

export const getBerichten = (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.categorie) params.append('categorie', filters.categorie);
  if (filters.gepubliceerd !== undefined && filters.gepubliceerd !== '')
    params.append('gepubliceerd', filters.gepubliceerd);
  const query = params.toString() ? `?${params.toString()}` : '';
  return fetch(`${BASE_URL}/berichten${query}`).then((res) => {
    if (!res.ok) throw new Error(`Fout bij ophalen berichten: ${res.status}`);
    return res.json();
  });
};

export const getBericht = (id) =>
  fetch(`${BASE_URL}/berichten/${id}`).then((res) => {
    if (!res.ok) throw new Error(`Fout bij ophalen bericht: ${res.status}`);
    return res.json();
  });

export const createBericht = (data) =>
  fetch(`${BASE_URL}/berichten`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error(`Fout bij aanmaken bericht: ${res.status}`);
    return res.json();
  });

export const updateBericht = (id, data) =>
  fetch(`${BASE_URL}/berichten/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error(`Fout bij bijwerken bericht: ${res.status}`);
    return res.json();
  });

export const deleteBericht = (id) =>
  fetch(`${BASE_URL}/berichten/${id}`, { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error(`Fout bij verwijderen bericht: ${res.status}`);
  });
