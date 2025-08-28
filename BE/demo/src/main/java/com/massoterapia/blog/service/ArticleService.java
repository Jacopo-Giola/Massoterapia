package com.massoterapia.blog.service;

import com.massoterapia.blog.model.Article;
import com.massoterapia.blog.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public Optional<Article> getArticleById(Long id) {
        return articleRepository.findById(id);
    }

    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    public Article updateArticle(Long id, Article updatedArticle) {
        return articleRepository.findById(id)
                .map(article -> {
                    article.setTitle(updatedArticle.getTitle());
                    article.setContent(updatedArticle.getContent());
                    article.setAuthor(updatedArticle.getAuthor());
                    return articleRepository.save(article);
                }).orElseThrow(() -> new RuntimeException("Article not found"));
    }

    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }
}
