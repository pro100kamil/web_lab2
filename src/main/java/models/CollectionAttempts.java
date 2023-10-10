package models;

import javax.ejb.Stateful;
import javax.faces.bean.SessionScoped;
import java.beans.JavaBean;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@JavaBean
@SessionScoped
@Stateful
public class CollectionAttempts implements Serializable {
    private final List<Attempt> attempts;
    private final LocalDateTime dateTime;

    public CollectionAttempts() {
        attempts = new ArrayList<>();
        dateTime = LocalDateTime.now();
    }

    public void add(Attempt attempt) {
        attempts.add(attempt);
    }

    public List<Attempt> getAttempts() {
        return attempts;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CollectionAttempts that = (CollectionAttempts) o;
        return Objects.equals(attempts, that.attempts) && Objects.equals(dateTime, that.dateTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(attempts, dateTime);
    }

    @Override
    public String toString() {
        return "CollectionAttempts{" +
                "attempts=" + attempts +
                ", dateTime=" + dateTime +
                '}';
    }
}
