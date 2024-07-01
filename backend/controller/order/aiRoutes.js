// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const natural = require('natural');
// const router = express.Router();

// // Load data produk
// const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json')));

// // Preprocess TF-IDF matrix
// const TfIdf = natural.TfIdf;
// const tfidf = new TfIdf();
// products.forEach(product => {
//     tfidf.addDocument(product.product_description);
// });

// // Fungsi untuk mencari produk serupa
// function getRecommendations(productId) {
//     const productIndex = products.findIndex(p => p.product_id === productId);
//     if (productIndex === -1) {
//         return [];
//     }

//     const productDescription = products[productIndex].product_description;
//     const similarities = [];

//     tfidf.documents.forEach((_, index) => {
//         if (index !== productIndex) {
//             const similarity = natural.JaroWinklerDistance(productDescription, tfidf.documents[index].document);
//             similarities.push({ index, similarity });
//         }
//     });

//     const similarProducts = similarities
//         .sort((a, b) => b.similarity - a.similarity)
//         .slice(0, 3) // Ambil 3 produk teratas selain produk itu sendiri
//         .map(sim => products[sim.index]);

//     return similarProducts;
// }

// // API endpoint untuk rekomendasi produk
// router.get('/recommend/:productId', (req, res) => {
//     const productId = parseInt(req.params.productId, 10);
//     const recommendations = getRecommendations(productId);
//     res.json(recommendations);
// });

// module.exports = router;
