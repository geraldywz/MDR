package csf.mdr.model;

import java.util.Objects;

public class TodoSummary {
    private String id;
    private String title;
    private String description;
    private String priority;

    public TodoSummary() {
    }

    public TodoSummary(String id, String title, String description, String priority) {
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

    public TodoSummary id(String id) {
        setId(id);
        return this;
    }

    public TodoSummary title(String title) {
        setTitle(title);
        return this;
    }

    public TodoSummary description(String description) {
        setDescription(description);
        return this;
    }

    public TodoSummary priority(String priority) {
        setPriority(priority);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof TodoSummary)) {
            return false;
        }
        TodoSummary todoSummary = (TodoSummary) o;
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
