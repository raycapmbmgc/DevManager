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

export async function createProduct(req, res) {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Nome e preço são obrigatórios" });
  }

  const { data, error } = await supabase
    .from("products")
    .insert([{ name, price, description }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const { error } = await supabase
    .from("products")
    .update({ name, price, description })
    .eq("id", id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Produto atualizado" });
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

  res.json({ message: "Produto removido" });
}
