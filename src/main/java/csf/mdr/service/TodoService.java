package csf.mdr.service;

import java.util.List;

import csf.mdr.model.Book;

public interface TodoService {

    public List<Book> search(String title);
    
    public Book getBook(String key);

    
}
