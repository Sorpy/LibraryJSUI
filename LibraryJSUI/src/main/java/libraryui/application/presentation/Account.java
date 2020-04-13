package libraryui.application.presentation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Account {

    @GetMapping("/account")
    public String account() {
        return "account";
    }

    @GetMapping("/accounts")
    public String accounts() {
        return "accounts";
    }

    @GetMapping("/account-edit/{id}")
    public String updateAccount() {
        return "account-edit";
    }
}
