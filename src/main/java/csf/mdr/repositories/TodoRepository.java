package csf.mdr.repositories;

import static csf.mdr.util.Constants.*;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TodoRepository {

    @Autowired
    @Qualifier(BEAN_TODO_CACHE)
    private RedisTemplate<String, String> template;

    public void save(String key, String value) {
        template
                .opsForValue()
                .set(sanitize(key), value);
    }

    public Optional<String> get(String key) {
        String value = template.opsForValue().get(sanitize(key));
        return Optional.ofNullable(value);
    }

    private String sanitize(String k) {
        return k.trim().toLowerCase();
    }

}
