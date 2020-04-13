package libraryui.application.data.entity;

import libraryui.application.data.entity.base.PersistentNamed;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class ApiSession extends PersistentNamed {

    private Long userId;

    private String authToken;

    private ArrayList<UserGroup> userGroups;

    public ArrayList<UserGroup> getUserGroups() {
        return userGroups;
    }

    public void setUserGroups(ArrayList<UserGroup> userGroups) {
        this.userGroups = userGroups;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getAuthToken() {
        return authToken;
    }

    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }


}
