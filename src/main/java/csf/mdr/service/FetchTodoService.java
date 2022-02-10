package csf.mdr.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import csf.mdr.model.Book;

import static csf.mdr.util.Constants.*;

@Service(FETCH_TODO_SERVICE)
public class FetchTodoService implements TodoService {

    private final Logger logger = LoggerFactory.getLogger(FetchTodoService.class);

    @Autowired
    @Qualifier(BEAN_TODO_SERVICE)
    private OpenTodoService delegate;

    @Autowired
    private CacheTodoService cache;

    public List<Book> search(String title) {
        return delegate.search(title);
    }

    public Book getBook(String key) {
        Optional<Book> opt = cache.get(key);
        if (opt.isPresent()) {

            logger.info("Cache hit for %s".formatted(key));
            Book b = opt.get();
            b.setCached(true);

            return b;
        } else {

            Book b = delegate.getBook(key);
            cache.save(b);
            b.setCached(false);

            return b;
        }
    }
}