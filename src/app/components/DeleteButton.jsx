"use client"

import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from 'lucide-react';
const DeleteButton = ({ deleteTutor, id }) => {
    const handleDelete = async (id) => {
        await deleteTutor(id)
    }
    return (
        <div>
            <AlertDialog>
                <Button isIconOnly variant="light" className=" text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors" title="Delete">
                    <Trash2 className="" />
                </Button>
                <AlertDialog.Backdrop
                    className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
                    variant="blur"
                >
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-105">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header className="items-center text-center">
                                <AlertDialog.Icon status="danger">
                                    <TriangleExclamation className="size-5" />
                                </AlertDialog.Icon>
                                <AlertDialog.Heading>Permanently delete your account?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This action cannot be undone. All your data, settings, and content will be
                                    permanently removed from our servers. The dramatic red backdrop emphasizes the
                                    severity and irreversibility of this decision.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer className="flex-col-reverse">
                                <Button className="w-full" slot="close">
                                    Keep Account
                                </Button>
                                <Button onClick={()=>handleDelete(id)} className="w-full" slot="close" variant="danger">
                                    Conform Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteButton;