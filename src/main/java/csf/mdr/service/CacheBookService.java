package csf.mdr.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csf.mdr.model.Book;
import csf.mdr.repositories.TodoRepository;

@Service
public class CacheBookService {

    private final Logger logger = LoggerFactory.getLogger(CacheBookService.class);

    @Autowired
    private TodoRepository bookRepo;

    public void save(Book b) {
        bookRepo.save(b.getKey(), b.toJson().toString());
    }

    public Optional<Book> get(String key) {
        Optional<String> json = bookRepo.get(key);
        logger.info("Retrieving Book >>>> " + key);
        if (json.isEmpty()) {
            logger.info("Retrieval >>>> Failed.");
            return Optional.empty();
        }
        logger.info("Retrieval >>>> Success.");
        return Optional.of(Book.create(json.get()));
    }
}
