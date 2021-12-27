import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet,Pressable,Dimensions, } from 'react-native'
import { theme } from "../core/theme";
import {
    MaterialCommunityIcons,
    Ionicons,
    Octicons,
  } from "react-native-vector-icons";
import { LinePartition } from "../LinePartition";
import Modal from "react-native-modal";
const { width } = Dimensions.get("window");
export default function ModalFeed(params) {
    
    const isModalVisible = params.isModalVisible
    const isModalReportVisible = params.isModalReportVisible
    const toggleEditPost = params.toggleEditPost
    const toggleDeletePost = params.toggleDeletePost
    const toggleReportModal = params.toggleReportModal
    return (
        <View >
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInUp"
          style={styles.modal}
        >
          <View>
            <Pressable style={styles.button} onPress={toggleEditPost}>
              <Text style={styles.text}>Chỉnh sửa bài đăng</Text>
            </Pressable>
            <LinePartition color={theme.colors.silver} />
            <Pressable style={styles.button} onPress={toggleDeletePost}>
              <Text style={styles.text}>Xóa bài đăng</Text>
            </Pressable>
            <LinePartition color={theme.colors.silver} />
            <Pressable style={styles.button} onPress={toggleReportModal}>
              <Text style={styles.text}>Báo xấu</Text>
            </Pressable>
          </View>
        </Modal>
        <Modal
          isVisible={isModalReportVisible}
          animationIn="slideInUp"
          style={styles.modal}
        >
          <View>
            <Text title="Lý do báo xấu"></Text>
            <Pressable style={styles.button} onPress={toggleReportModal}>
              <Text style={styles.text}>Nội dung nhạy cảm</Text>
            </Pressable>
            <LinePartition color={theme.colors.silver} />
            <Pressable style={styles.button} onPress={toggleReportModal}>
              <Text style={styles.text}>Làm phiền</Text>
            </Pressable>
            <LinePartition color={theme.colors.silver} />
            <Pressable style={styles.button} onPress={toggleReportModal}>
              <Text style={styles.text}>Lừa đảo</Text>
            </Pressable>
            <LinePartition color={theme.colors.silver} />
            <Pressable style={styles.button} onPress={toggleReportModal}>
              <Text style={styles.text}>Nhập lý do khác</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
      },
      button: {
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
        width: width,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: theme.colors.black,
      },
})