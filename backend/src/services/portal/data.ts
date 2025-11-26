/**
 * @summary
 * Mock data for the Portal feature.
 * Serves as an in-memory database for the application.
 *
 * @module services/portal/data
 */

import { CompanyProfile, Product } from './portalTypes';

/**
 * @description Mock list of products for the catalog
 */
export const productsData: Product[] = [
  // Fruits
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'Maçã Fuji',
    description: 'Maçãs frescas e crocantes, ideais para lanches.',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    category: 'Frutas',
  },
  {
    id: 'c92d18b3-2f8e-4a5d-9b1c-8e3f4a5b6c7d',
    name: 'Banana Prata',
    description: 'Bananas ricas em potássio, perfeitas para o dia a dia.',
    imageUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224',
    category: 'Frutas',
  },
  {
    id: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
    name: 'Laranja Pera',
    description: 'Laranjas suculentas, ótimas para sucos.',
    imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e',
    category: 'Frutas',
  },
  {
    id: 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
    name: 'Uva Thompson',
    description: 'Uvas sem semente, doces e frescas.',
    imageUrl: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f',
    category: 'Frutas',
  },
  {
    id: 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
    name: 'Manga Palmer',
    description: 'Mangas doces e sem fiapos.',
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078',
    category: 'Frutas',
  },
  {
    id: 'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a',
    name: 'Abacaxi Pérola',
    description: 'Abacaxi doce e selecionado.',
    imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba',
    category: 'Frutas',
  },
  {
    id: 'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b',
    name: 'Morango',
    description: 'Morangos vermelhos e frescos.',
    imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6',
    category: 'Frutas',
  },
  {
    id: 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c',
    name: 'Melancia',
    description: 'Melancia inteira ou em pedaços, muito refrescante.',
    imageUrl: 'https://images.unsplash.com/photo-1563288431-b441430baa14',
    category: 'Frutas',
  },
  // Vegetables
  {
    id: 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d',
    name: 'Alface Americana',
    description: 'Folhas crocantes e frescas para sua salada.',
    imageUrl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1',
    category: 'Verduras',
  },
  {
    id: 'b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e',
    name: 'Tomate Italiano',
    description: 'Tomates maduros, ideais para molhos e saladas.',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
    category: 'Verduras',
  },
  {
    id: 'c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f',
    name: 'Cenoura',
    description: 'Cenouras ricas em betacaroteno.',
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    category: 'Verduras',
  },
  {
    id: 'd0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a',
    name: 'Batata Inglesa',
    description: 'Batatas versáteis para diversas receitas.',
    imageUrl: 'https://images.unsplash.com/photo-1518977676651-b53c82a63460',
    category: 'Verduras',
  },
  {
    id: 'e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b',
    name: 'Cebola Roxa',
    description: 'Cebolas com sabor suave e cor vibrante.',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb',
    category: 'Verduras',
  },
  {
    id: 'f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b6c',
    name: 'Pimentão Amarelo',
    description: 'Pimentões doces e coloridos.',
    imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdf5d6c465',
    category: 'Verduras',
  },
  {
    id: 'a3b4c5d6-e7f8-4a9b-0c1d-2e3f4a5b6c7d',
    name: 'Brócolis Ninja',
    description: 'Brócolis fresco e nutritivo.',
    imageUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc',
    category: 'Verduras',
  },
];

/**
 * @description Mock company profile data
 */
export const companyProfileData: CompanyProfile = {
  history:
    'Fundado em 1995, o Hortifrutti Frescor começou como uma pequena banca de feira familiar. Com o compromisso inabalável de oferecer apenas os produtos mais frescos e de alta qualidade, crescemos e nos tornamos referência na região. Ao longo de quase três décadas, mantivemos nossa essência de proximidade com o produtor rural e respeito pelo cliente, trazendo o campo para a mesa das famílias urbanas.',
  mission:
    'Proporcionar saúde e bem-estar aos nossos clientes através de alimentos frescos, selecionados e de alta qualidade, promovendo uma alimentação saudável e sustentável.',
  values: 'Qualidade, Frescor, Sustentabilidade, Atendimento Humanizado e Transparência.',
  address: 'Av. das Frutas, 1234, Jardim Pomar, São Paulo - SP, 01234-567',
  businessHours: 'Segunda a Sábado: 08h às 20h. Domingos e Feriados: 08h às 14h.',
  mapCoordinates: {
    latitude: -23.55052,
    longitude: -46.633308,
  },
  contact: {
    phone: '(11) 99999-8888',
    email: 'contato@hortifruttifrescor.com.br',
  },
};
