package csf.mdr.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import csf.mdr.model.Book;
import csf.mdr.model.Todo;
import csf.mdr.repositories.TodoRepository;

import static csf.mdr.util.Constants.*;

@Service(FETCH_TODO_SERVICE)
public class FetchTodoService {

    private final Logger logger = LoggerFactory.getLogger(FetchTodoService.class);

    @Autowired
    private TodoRepository TodoRepo;

    public List<Book> search(String title) {
        return null;
    }

    public Book getBook(String key) {
        return null;
    }

    public void saveTodo(Todo todo) {
        TodoRepo.save(todo.getId(), todo.toJson().toString());
    }
}
