package csf.mdr.model;

import java.util.Objects;

import jakarta.json.Json;

import jakarta.json.JsonObject;

public class Todo {
    private String id;
    private String title;
    private String description;
    private String priority;

    public Todo() {
    }

    public Todo(String id, String title, String description, String priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return this.priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Todo id(String id) {
        setId(id);
        return this;
    }

    public Todo title(String title) {
        setTitle(title);
        return this;
    }

    public Todo description(String description) {
        setDescription(description);
        return this;
    }

    public Todo priority(String priority) {
        setPriority(priority);
        return this;
    }

    public JsonObject toJson() {
        return Json.createObjectBuilder()
                .add("id", this.id)
                .add("title", this.title)
                .add("description", this.description)
                .add("priority", this.priority)
                .build();
    }

    public static Todo toWeather(JsonObject o) {
        Todo t = new Todo();
        t.setId(o.getString("id"));
        t.setTitle(o.getString("title"));
        t.setDescription(o.getString("description"));
        t.setPriority(o.getString("priority"));

        return (t);
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Todo)) {
            return false;
        }
        Todo todoSummary = (Todo) o;
        return Objects.equals(id, todoSummary.id) && Objects.equals(title, todoSummary.title)
                && Objects.equals(description, todoSummary.description)
                && Objects.equals(priority, todoSummary.priority);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, priority);
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", title='" + getTitle() + "'" +
                ", description='" + getDescription() + "'" +
                ", priority='" + getPriority() + "'" +
                "}";
    }

}
