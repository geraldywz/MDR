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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.json.Json;
import jakarta.json.JsonObjectBuilder;
import csf.mdr.model.TodoSummary;
import csf.mdr.service.BookService;

import static csf.mdr.util.Constants.*;

@RestController
@RequestMapping(path = "/api/todo", produces = MediaType.APPLICATION_JSON_VALUE)
public class TodoRestController {

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

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> ingestJson(@RequestBody TodoSummary tds) {

        System.out.printf(tds.getTitle());

        String name = "Roland";
        String email = "Queef";

        System.out.printf("name: %s, email: %s\n", name, email);

        JsonObjectBuilder payload = Json.createObjectBuilder();

        if (name.trim().toLowerCase().startsWith("justin")) {
            payload.add("message",
                    "Unfortunately for you, your name begins with Justin");
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(payload.build().toString());
        }

        payload.add("message",
                "%s, you have been registered".formatted(name));
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .contentType(MediaType.APPLICATION_JSON)
                .body(payload.build().toString());
    }

}