import { supabase } from "../config/supabase.js";


export async function getProducts(req, res) {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
}

export async function getAvailableProducts(req, res) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("available", true);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
}


export async function createProduct(req, res) {
  const { name, description, price, category, image_url } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Nome e preço são obrigatórios" });
  }

  const { data, error } = await supabase
    .from("products")
    .insert([{ name, description, price, category, image_url }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
}


export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, price, category, image_url, available } = req.body;

  const { data, error } = await supabase
    .from("products")
    .update({
      name,
      description,
      price,
      category,
      image_url,
      available,
    })
    .eq("id", id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
}


export async function deleteProduct(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(204).send();
}
