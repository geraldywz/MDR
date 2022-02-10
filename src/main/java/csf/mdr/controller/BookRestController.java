package csf.mdr.controller;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import csf.mdr.service.BookService;

import static csf.mdr.util.Constants.*;

@RestController
@RequestMapping(path = "/api/search", produces = MediaType.APPLICATION_JSON_VALUE)
public class BookRestController {

    @Autowired
    @Qualifier(BEAN_LIBRARY_SERVICE)
    BookService bookSvc;

    // private static final Logger logger =
    // LoggerFactory.getLogger(WeatherController.class);

    @GetMapping
    public ResponseEntity<String> getBookByRequestParam(String title) {
        return getBook(title);
    }

    @GetMapping(value = "/{title}")
    public ResponseEntity<String> getBookByPathVariable(@PathVariable String title) {
        return getBook(title);
    }

    @PostMapping
    public void saveTodo() {

    }

    private ResponseEntity<String> getBook(String title) {
        if (title.equals(null) || title.length() == 0) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(
                            Json.createObjectBuilder()
                                    .add("Error", "Title Required.")
                                    .build()
                                    .toString());
        } else {
            return ResponseEntity
                    .ok()
                    .body(bookSvc.search(title).toString());
        }
    }
}