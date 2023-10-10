package models;

public class Checker {
    public static boolean checkHit(double x, double y, int r) {
        if (x >= 0 && y >= 0 && x * x + y * y <=
                ((double) r / 2) * ((double) r / 2)) {  //первая четверть
            return true;
        }
        if (x < 0 && y > 0 && y <= 2 * x + r) {  //вторая четверть
            return true;
        }
        if (x < 0 && y < 0 && x >= -r && y >= (double) -r / 2) {  //третья четверть
            return true;
        }
        return (x == 0 && (double) -r / 2 <= y && y <= r) ||
                (y == 0 && -r <= x && x <= (double) r / 2);
    }
}
