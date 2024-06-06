package com.yupi.web.model.dto.user;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户创建请求
 *
 * @author <mar1
 */
@Data
public class UserAddRequest implements Serializable {

    /**
     * 用户昵称
     */
    private String userName;

    /**
     * 账号
     */
    private String userAccount;

    /**
     * 用户头像
     */
    private String userAvatar;

    /**
     * 头像
     */
    private String userProfile="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";

    /**
     * 手机号码
     */
    private String userNumber;

    /**
     * 用户角色: user, admin
     */
    private String userRole;

    private static final long serialVersionUID = 1L;
}